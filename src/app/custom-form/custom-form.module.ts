import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClassicFormComponent, StepperComponent],
  imports: [
    CommonModule,
    CustomFormRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CustomFormModule {}
