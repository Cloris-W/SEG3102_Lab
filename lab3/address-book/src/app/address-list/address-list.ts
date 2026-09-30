import { Component } from '@angular/core';
import { AddressEntry } from './address-entry';

@Component({
  imports: [],
  selector: 'app-address-list',
  styleUrl: './address-list.css',
  templateUrl: './address-list.html',
})
export class AddressList {
  addresses: AddressEntry[] = [];
}
