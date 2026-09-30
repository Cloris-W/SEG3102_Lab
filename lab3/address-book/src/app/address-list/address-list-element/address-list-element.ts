import { Component, Input } from '@angular/core';
import { AddressEntry } from '../address-entry';
import {NgClass} from "@angular/common";

  @Component({
  selector: 'app-address-list-element',
  imports: [
    NgClass
  ],
  templateUrl: './address-list-element.html',
  styleUrl: './address-list-element.css'
})

export class AddressListElement {
  selected = false;

  @Input({ required: true }) address!: AddressEntry;

  getFullName(): string {
    return `${this.address.firstName}, ${this.address.lastName}`;
  } 
}
