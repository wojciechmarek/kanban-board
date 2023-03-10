import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  quantity = 1;

  @Input()
  increment: number = 1;

  onSubtract() {
    this.quantity -= this.increment;
  }

  onAdd() {
    this.quantity += this.increment;
  }
}
