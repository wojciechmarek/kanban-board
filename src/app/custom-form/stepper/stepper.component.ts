import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements ControlValueAccessor {
  quantity = 1;

  @Input()
  increment: number = 1;

  onChange = (quantity: number) => {};

  onTouched = () => {};

  isTouched = false;

  isDisabled = false;

  onSubtract() {
    this.markAsTouched();

    if (!this.isDisabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }

  onAdd() {
    this.markAsTouched();

    if (!this.isDisabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);
    }
  }

  markAsTouched() {
    if (!this.isTouched) {
      this.isTouched = true;
      this.onTouched();
    }
  }

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
