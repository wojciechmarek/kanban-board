import { Component } from '@angular/core';
import { FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-classic-form',
  templateUrl: './classic-form.component.html',
  styleUrls: ['./classic-form.component.scss'],
})
export class ClassicFormComponent {
  constructor(private fb: FormBuilder) {}
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
