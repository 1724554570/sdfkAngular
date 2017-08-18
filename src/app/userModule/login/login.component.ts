import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../../entity/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'wang';
  password = '1234';
  auth: Auth;

  constructor( @Inject('auth') private service, private router: Router) { }

  onSubmit() {
    this.service
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        // let redirectUrl = (auth.redirectUrl === null || auth.redirectUrl === undefined) ? '/': auth.redirectUrl;
        this.auth = Object.assign({}, auth);
        if (!auth.hasError) {
          this.router.navigate(['todo']);
        }
      });
  }

}
