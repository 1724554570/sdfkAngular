import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Auth } from '../entity/entities';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    @Inject('auth') private authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    let local = localStorage.getItem('login');
    if (local) {
      local = JSON.parse(local);
      let auths = new Auth();
      auths.user = local['user'];
      auths.errMsg = local['errMsg'];
      auths.hasError = local['hasError'];
      auths.redirectUrl = local['redirectUrl'];
      console.log(auths);
      //this.auth = auths;
    }

    return this.authService.getAuth().map(auth => {
      console.log(auth);
      return !auth.hasError;
    });
  }

  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;

    return this.authService.getAuth().map(auth => {
      console.log(auth);
      return !auth.hasError;
    });
  }

}
