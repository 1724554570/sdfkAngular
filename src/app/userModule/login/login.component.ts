import {
  Component,
  Inject,
  trigger,
  state,
  style,
  animate,
  transition,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MdlDialogService, MdlDialogReference } from 'angular2-mdl';
import { Auth } from '../../entity/entities';
import { RegisterDialogComponent } from './register-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState',
      [
        state('inactive', style({ transform: 'scale(1)' })),
        state('active', style({ transform: 'scale(1.1)' })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
      ])
  ]
})
export class LoginComponent implements OnDestroy {

  username = '1724554570@qq.com';
  password = '123456';
  auth: Auth;

  photo = '/assets/login/login_default_bg.jpg';
  subscription: Subscription;
  loginBtnState: string = 'inactive';

  constructor(
    @Inject('auth') private authService,
    private dialogService: MdlDialogService,
    private router: Router) {

  }

  onSubmit() {
    this.subscription = this.authService.login(this.username, this.password).subscribe(auth => {
      this.auth = Object.assign({}, auth);
      if (!auth.hasError) {
        this.router.navigate(['todo']);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription !== undefined)
      this.subscription.unsubscribe();
  }

  toggleLoginState(state: boolean) {
    this.loginBtnState = state ? 'active' : 'inactive';
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
