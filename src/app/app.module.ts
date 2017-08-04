import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from 'angular2-mdl';
import { AppComponent } from './app.component';
import { DetailComponent } from './user/detail/detail.component';

import { routing } from './app.router';
import { TodoComponent } from './todo/todo.component';

// 测试使用
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';




@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    HttpModule,
    MdlModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
