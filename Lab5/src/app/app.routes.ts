import { Routes } from '@angular/router';
import {AuthGuard} from '@angular/fire/auth-guard';
import {SignIn} from './sign-in/sign-in';
import {SignUp} from './sign-up/sign-up';
import {AddressList} from './address-list/address-list';
import {AddressTable} from './address-list/address-table/address-table';
import {PasswordForgot} from './password-forgot/password-forgot';

export const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignIn },
  { path: 'sign-up', component: SignUp },
  { path: 'address-list', component: AddressList, canActivate: [AuthGuard] },
  { path: 'address-table', component: AddressTable, canActivate: [AuthGuard] },
  { path: 'password-forgot', component: PasswordForgot }
];