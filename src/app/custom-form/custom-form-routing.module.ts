import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassicFormComponent } from './classic-form/classic-form.component';

const routes: Routes = [
  {
    path: 'classic-form',
    component: ClassicFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFormRoutingModule {}
