import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from 'angular2-mdl';
import { AppComponent } from './action/app.component';

import { routing } from './app.router';
// 加载子模块
import { TodoModule } from './todo/todo.module';

// 测试使用
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryTodoDbService } from './todo/todo-data';

// 加载模块
//import { DetailComponent } from './user/detail/detail.component';
import { LoginComponent } from './user/login/login.component';

// 注册Service
import { AuthService } from './core/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    MdlModule,
    TodoModule,
    routing
  ],
  providers: [
    { provide: 'auth', useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
