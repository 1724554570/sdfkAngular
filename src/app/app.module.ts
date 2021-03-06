import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { TodoModule } from './todoModule/todo.module';
import { LoginModule } from './userModule/user.module';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule,
    CoreModule,
    NgbModule,
    AppRoutingModule,
    LoginModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
