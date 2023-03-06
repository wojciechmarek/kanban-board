import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { GoogleSignInDirective } from './google-sign-in.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginPageComponent, GoogleSignInDirective],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
