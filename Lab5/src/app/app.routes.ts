import { Routes } from '@angular/router';
import { AddressList } from './address-list/address-list';
import { AddressTable } from './address-list/address-table/address-table';

export const routes: Routes = [
  { path: 'addresses', component: AddressList },
  { path: 'contact', component: AddressTable },
  { path: 'address-list', children: [] },
  { path: '', redirectTo: 'addresses', pathMatch: 'full' },
  { path: '**', component: AddressList },
];
