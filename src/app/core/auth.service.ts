import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { ReplaySubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Auth } from '../entity/entities';

@Injectable()
export class AuthService {

  auth: Auth = { hasError: true, redirectUrl: '', errMsg: 'not logged in' };
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);

  constructor(private http: Http, @Inject('user') private userService) {
  }

  getAuth(): Observable<Auth> {
    let sj = this.subject;
    return this.subject.asObservable();
  }

  unAuth(): void {
    this.auth = Object.assign({}, this.auth, { user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in' });
    this.subject.next(this.auth);
  }

  /**
   * 登录验证
   * @param username 用户名
   * @param password 密码
   */
  login(username: string, password: string): Observable<Auth> {
    return this.userService
      .findUser(username, password)
      .map(resp => {
        let auth = new Auth();
        if (null === resp) {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'resp not found';
        } else if (password === resp.password) {
          localStorage.setItem('log_id', resp.id);
          auth.user = resp;
          auth.hasError = false;
          auth.errMsg = null;
        } else {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        this.auth = Object.assign({}, auth);
        localStorage.setItem('login', JSON.stringify(this.auth));
        //this.subject.next(this.auth);
        return this.auth;
      });
  }

}
