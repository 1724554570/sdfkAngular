import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './user/detail/detail.component';
import { LoginComponent } from './user/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo'
  },
  // {
  //   path: '',
  //   redirectTo: 'detail',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'detail',
  //   component: DetailComponent
  // }
];

export const routing = RouterModule.forRoot(routes);