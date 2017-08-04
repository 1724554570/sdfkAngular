import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './user/detail/detail.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
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