// 子模块应用
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// 注册路由模块
import { TodoRoutingModule } from './todo-routing.module';

// 注册页面模块
import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

// 注册Service
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TodoRoutingModule
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
