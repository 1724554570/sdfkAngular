import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../../entity/entities';

import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { RegisterDialogComponent } from './register-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  windowHeight = window.innerHeight - 64;
  photo = '/assets/login/login_default_bg.jpg';
  username = '1724554570@qq.com';
  password = '123456';
  auth: Auth;

  constructor(
    @Inject('auth') private service,
    private dialogService: MdlDialogService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(window.innerHeight);
  }

  onSubmit() {
    this.service
      .get_user_log_in(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if (!auth.hasError) {
          this.router.navigate(['todo']);
        }
      });
  }


  register($event: MouseEvent) {
    let pDialog = this.dialogService.showCustomDialog({
      component: RegisterDialogComponent,
      isModal: true,
      styles: { 'width': '350px' },
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    });
    pDialog.map((dialogReference: MdlDialogReference) => {
      console.log('dialog visible', dialogReference);
    });

  }

}
