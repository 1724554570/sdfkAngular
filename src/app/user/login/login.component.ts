import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  username = "";
  password = "";

  // md = {
  //   username: '',
  //   password: ''
  // }

  constructor( @Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

  onClick() {

  }
}
