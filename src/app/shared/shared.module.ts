import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdlModule
  ]
})
export class SharedModule { }
