import { Component } from '@angular/core';
import { AddressEntry } from './address-entry';
import { AddressListElement } from './address-list-element/address-list-element';
import { AddressView } from './address-view/address-view';

@Component({
  selector: 'app-address-list',
  imports: [AddressListElement, AddressView],
  templateUrl: './address-list.html',
  styleUrl: './address-list.css',
})
export class AddressList {
  addresses: AddressEntry[] = [];
  currentAddress: AddressEntry | null = null;

  select(address: AddressEntry): void {
    this.currentAddress = address;
  }

  addAddress(): void {
    const newAddress = new AddressEntry('New', 'Entry');
    this.addresses = [newAddress, ...this.addresses];
    this.select(newAddress);
  }

  deleteCurrent(): void {
    this.addresses = this.addresses.filter((address: AddressEntry) => address !== this.currentAddress);
    this.currentAddress = null;
  }
}