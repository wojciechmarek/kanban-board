import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClassicFormComponent],
  imports: [CommonModule, CustomFormRoutingModule, ReactiveFormsModule],
})
export class CustomFormModule {}
