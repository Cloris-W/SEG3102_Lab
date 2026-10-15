import { Routes } from '@angular/router';
import {AuthGuard} from "@angular/fire/auth-guard";

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignIn },
  { path: 'sign-up', component: SignUp },
  { path: 'address-list', component: AddressList, canActivate: [AuthGuard] },
  { path: 'password-forgot', component: PasswordForgot }
];