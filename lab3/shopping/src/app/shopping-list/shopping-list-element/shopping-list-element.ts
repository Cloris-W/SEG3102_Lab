import { Component, Input } from '@angular/core';
import { ShoppingEntry } from '../shopping-entry';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-shopping-list-element',
  imports: [
    NgClass
  ],
  templateUrl: './shopping-list-element.html',
  styleUrl: './shopping-list-element.css'
})

export class ShoppingListElement {
  selected = false;
  @Input({ required: true }) product!: ShoppingEntry;

  getFullName(): string {
    return `${this.product.productName}`;
  }
}

