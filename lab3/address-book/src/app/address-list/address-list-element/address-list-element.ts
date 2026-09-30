import { Component, Input, inject, OnDestroy, OnInit} from '@angular/core';
import { AddressEntry } from '../address-entry';
import {NotificationService} from '../notification-service';
import {Subscription} from 'rxjs';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-address-list-element',
  imports: [
    NgClass
  ],
  templateUrl: './address-list-element.html',
  styleUrl: './address-list-element.css'
})
export class AddressListElement implements OnInit, OnDestroy {
  @Input({ required: true }) address!: AddressEntry;
  selected = false;
  subscription: Subscription | undefined;
  notificationService= inject(NotificationService);

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newAddress => {
      this.selected = newAddress === this.address;
    });
  }
  getFullName(): string {
    return `${this.address.firstName}, ${this.address.lastName}`;
  }
  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}