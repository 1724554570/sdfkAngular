import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { User } from '../entity/entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';
  // private api_url = 'http://10.75.104.27:8080/ouserAction';

  constructor(private http: Http) { }

  findUser(user: object): Promise<User> {
    let username = user['username'];
    const url = `${this.api_url}/?username=${username}`;
    // const url = `${this.api_url}/login`;
    if (!user || typeof user !== 'object') {
      return this.handleError('user is undefined');
    }
    return this.http
      .get(url, JSON.stringify(user))
      .toPromise()
      .then(res => { let users = res.json() as User[]; return (users.length > 0) ? users[0] : null; })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}