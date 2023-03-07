import { Directive, HostListener } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {
  Auth,
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';

@Directive({
  selector: '[appGithubSingIn]',
})
export class GithubSingInDirective {
  auth: Auth;

  constructor(private afService: FirebaseApp) {
    this.auth = getAuth(this.afService);
  }

  @HostListener('click')
  onSignInWithGoogleClick() {
    const provider = new GithubAuthProvider();
    signInWithPopup(this.auth, provider);
  }
}
