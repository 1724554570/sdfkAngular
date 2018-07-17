import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { TodoModule } from './todoModule/todo.module';
import { LoginModule } from './userModule/user.module';

import { AppComponent } from './base/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdlModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    TodoModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
