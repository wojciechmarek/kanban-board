import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: 'classic-form',
    component: ClassicFormComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFormRoutingModule {}
