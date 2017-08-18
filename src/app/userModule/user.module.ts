import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
