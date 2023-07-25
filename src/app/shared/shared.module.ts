import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NameFilterPipe } from './name-filter.pipe';



@NgModule({
  declarations: [
    ButtonComponent,
    NameFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NameFilterPipe
  ]
})
export class SharedModule { }
