import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterDialogComponent } from './login/register-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterDialogComponent
  ],
  entryComponents: [RegisterDialogComponent]
})
export class LoginModule { }
