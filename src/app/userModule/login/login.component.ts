import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from '../../entity/entities';

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'wang';
  password = '1234';
  auth: Auth;
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;

  constructor( @Inject('auth') private service, private router: Router) { }

  ngOnInit() {
    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: 'This is an success alert',
      }, {
        id: 2,
        type: 'info',
        message: 'This is an info alert',
      }, {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert',
      }, {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert',
      }, {
        id: 5,
        type: 'primary',
        message: 'This is a primary alert',
      }, {
        id: 6,
        type: 'secondary',
        message: 'This is a secondary alert',
      }, {
        id: 7,
        type: 'light',
        message: 'This is a light alert',
      }, {
        id: 8,
        type: 'dark',
        message: 'This is a dark alert',
      });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  onSubmit() {
    this.service
      .get_user_log_in(this.username, this.password)
      .subscribe(auth => {
        // let redirectUrl = (auth.redirectUrl === null || auth.redirectUrl === undefined) ? '/': auth.redirectUrl;
        this.auth = Object.assign({}, auth);
        if (!auth.hasError) {
          this.router.navigate(['todo']);
        }
      });
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

}
