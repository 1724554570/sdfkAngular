import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../../entity/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .fromdiv{width:300px;margin:10px auto;}
    `
  ]
})

export class LoginComponent implements OnInit {

  username = "wang";
  password = "1234";
  auth: Auth;

  constructor( @Inject('auth') private authService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue);
    this.authService.getUserLogin(formValue.login.username, formValue.login.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null) ? '/' : auth.redirectUrl;
        if (!auth.hasError) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }
}
