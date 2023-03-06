import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, getAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from '@angular/fire/auth';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
})
export class EmailLoginComponent implements OnInit {
  auth: Auth;
  form!: FormGroup;

  type: 'login' | 'signup' | 'reset' = 'login';
  loading = false;

  serverMessage: string | undefined;

  constructor(private firebaseService: FirebaseApp, private fb: FormBuilder) {
    this.auth = getAuth(this.firebaseService);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', []],
    });
  }

  changeType(type: 'login' | 'signup' | 'reset') {
    this.type = type;
  }

  get isLogin() {
    return this.type === 'login';
  }

  get isSignup() {
    return this.type === 'signup';
  }

  get isPasswordReset() {
    return this.type === 'reset';
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value;
    }
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await signInWithEmailAndPassword(this.auth, email, password);
      } else if (this.isSignup) {
        await createUserWithEmailAndPassword(this.auth, email, password);
      } else if (this.isPasswordReset) {
        await sendPasswordResetEmail(this.auth, email);
        this.serverMessage = 'Password reset email sent.';
      }
    } catch (error) {
      this.serverMessage =
        (error as any).message || 'An unknown error occurred.';
    }
  }
}
