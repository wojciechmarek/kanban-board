import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { ClassicFormComponent } from './classic-form/classic-form.component';


@NgModule({
  declarations: [
    ClassicFormComponent
  ],
  imports: [
    CommonModule,
    CustomFormRoutingModule
  ]
})
export class CustomFormModule { }
