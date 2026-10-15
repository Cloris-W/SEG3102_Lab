import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { AddressEntry } from '../address-entry';
import { NgClass } from "@angular/common"
import { Subscription } from 'rxjs';
import { NotificationService } from '../notification-service';

@Component({
  selector: 'app-address-list-element',
  imports: [NgClass],
  templateUrl: './address-list-element.html',
  styleUrl: './address-list-element.css',
})
export class AddressListElement implements OnInit, OnDestroy {
  selected = false;
  subscription: Subscription | undefined;
  @Input({required:true}) address!: AddressEntry;
  notificationService = inject(NotificationService);
  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newAddress => {
      this.selected = newAddress === this.address;
    });
  }
  getFullname(): string{
    if (!this.address.firstName && !this.address.lastName) {
      return 'New Entry';
    }
    return `${this.address.firstName}, ${this.address.lastName}`;
  }
    ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}
