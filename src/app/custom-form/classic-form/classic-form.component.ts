import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-classic-form',
  templateUrl: './classic-form.component.html',
  styleUrls: ['./classic-form.component.scss'],
})
export class ClassicFormComponent {
  constructor(private fb: FormBuilder) {}
  profileForm = this.fb.group(
    {
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'blur',
      }),
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      age: [20],
    },
    { validators: firstAndLastNameTheSame }
  );

  onSubmit() {
    console.log(this.profileForm.value);
  }
}

const firstAndLastNameTheSame = (control: FormControl) => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');
  return firstName?.value === lastName?.value
    ? { firstAndLastNameTheSame: true }
    : null;
};
