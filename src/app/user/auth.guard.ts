import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, getAuth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  auth: Auth;

  constructor(private afService: FirebaseApp, private snackBar: SnackService) {
    this.auth = getAuth(this.afService);
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    console.log('AuthGuard....:', this.auth.currentUser);

    const isLoggedIn = !!this.auth.currentUser;

    if (!isLoggedIn) {
      this.snackBar.authError();
    }

    return isLoggedIn;
  }
}
