import { Directive, HostListener } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  Auth,
} from '@angular/fire/auth';

@Directive({
  selector: '[appGoogleSignIn]',
})
export class GoogleSignInDirective {
  auth: Auth;

  constructor(private afService: FirebaseApp) {
    this.auth = getAuth(this.afService);
  }

  @HostListener('click')
  onSignInWithGoogleClick() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  }
}
