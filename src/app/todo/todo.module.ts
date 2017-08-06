// 子模块应用
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 注册路由
import { routing } from './todo.router'
// 注册模块
import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
// 注册Service
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  providers: [
    { provide: 'todoService', useClass: TodoService }
  ]
})
export class TodoModule { }
