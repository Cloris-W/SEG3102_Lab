import { Component, inject } from '@angular/core';
import { AddressEntry } from './address-entry';
import { AddressListElement } from './address-list-element/address-list-element';
import { AddressView } from './address-view/address-view';
import { NotificationService } from './notification-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-address-list',
  imports: [AddressListElement, AddressView, RouterLink],
  templateUrl: './address-list.html',
  styleUrl: './address-list.css',
})
export class AddressList {
  showAddresses = false;
  notificationService: NotificationService = inject(NotificationService);

  get addresses(): AddressEntry[] {
    return this.notificationService.addresses;
  }

  get currentAddress(): AddressEntry | null {
    return this.notificationService.selectedElement.value;
  }

  select(address: AddressEntry): void {
    this.notificationService.selectionChanged(address);
  }

  addAdress(): void{
    this.notificationService.addAddress();
  }

  deleteCurrent(): void {
    this.notificationService.addresses = this.addresses.filter((address: AddressEntry) => address !== this.currentAddress );
    this.notificationService.selectionChanged(null);
  }


}
