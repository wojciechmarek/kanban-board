import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  auth: Auth;

  constructor(private firebaseService: FirebaseApp) {
    this.auth = getAuth(this.firebaseService);
  }
}
