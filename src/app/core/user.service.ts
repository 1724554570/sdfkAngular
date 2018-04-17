import { Injectable } from '@angular/core';

import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import ConstantsController from './constants.service';
import { User, Users, UsersInfo, Article } from '../entity/entities';

@Injectable()
export class UserService extends ConstantsController {

  private api_url = 'http://localhost:3000/users';

  private headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });

  // private a = { 'Accept': 'application/json,text/javascript,/*/', 'Content-Type': 'application/json;charset=UTF-8' };

  constructor(private http: Http) {
    super();
  }

  /**
   * 
   * @param userId 
   */
  getUser(userId: number): Observable<User> {
    const url = `${this.api_url}/${userId}`;
    return this.http.get(url).map(res => res.json() as User);
  }

  /**
   * 
   * @param username 
   * @param password 
   */
  findUser(username: string, password: string): Observable<User> {
    // const url = `${this.APISERVER}/${this.MODEL_Login}/getUserLogin`;
    // return this.http.post(url, this.forData({ username, password }))
    //   .subscribe(res => {
    //     let resp = res.json().data as UsersInfo;
    //     console.log(resp);
    //     return resp;
    //   });
    // return null;
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url).map(res => {
      let users = res.json() as User[];
      console.log(res);
      console.log(res.json());
      console.log(users);
      return (users.length > 0) ? users[0] : null;
    });
  }

  /**
   * 
   * @param id 
   */
  getArticleByUserId(id: any): Promise<Article> {
    return this.http.post(`${this.APISERVER}/${this.MODEL_Users}/getArticleByUserId`, this.forData({ id }))
      .toPromise()
      .then(res => {
        let resp_article = res.json().data.article.lists as Article;
        let resp_user = res.json().data.user as Users;
        console.log(resp_article, resp_user);
        return resp_article;
      }).catch(e => {
        console.log(e);
        return null;
      });
  }


}
