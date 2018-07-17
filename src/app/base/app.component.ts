import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../entity/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  auth: Auth;
  title = 'Awesome Todos';
  
  constructor(
    @Inject('auth') private authService,
    private router: Router) {

  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      this.auth = Object.assign({}, auth)
    });
  }

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.unAuth();
    this.auth = null;
    this.router.navigate(['login']);
  }
}
