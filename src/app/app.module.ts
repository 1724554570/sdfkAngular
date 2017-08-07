import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 注册样式模块
import { MdlModule } from 'angular2-mdl';

// 路由模块化
import { AppRoutingModule } from './app-routing.module';

// 加载子模块
import { CoreModule } from './core/core.module';
import { TodoModule } from './todo/todo.module';

// 测试使用
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryTodoDbService } from './todo/todo-data';

// 加载页面模块
import { AppComponent } from './action/app.component';
import { LoginComponent } from './user/login/login.component';
import { DetailComponent } from './user/detail/detail.component';

// 注册Service服务
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    AppRoutingModule,
    CoreModule,
    TodoModule,
    MdlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
