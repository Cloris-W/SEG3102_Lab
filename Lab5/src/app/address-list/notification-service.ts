import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressEntry } from './address-entry';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  addresses: AddressEntry[] = [];
  selectedElement = new BehaviorSubject<AddressEntry | null>(null);
  constructor() {}
  public selectionChanged(address: AddressEntry | null): void {
    this.selectedElement.next(address);
  }
  public addAddress(): void {
    const newAddress = new AddressEntry('', '');
    this.addresses = [newAddress, ...this.addresses];
    this.selectionChanged(newAddress);
  }
}
