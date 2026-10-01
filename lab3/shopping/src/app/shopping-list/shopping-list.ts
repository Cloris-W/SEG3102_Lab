import { Component } from '@angular/core';
import { shoppingEntry } from './shopping-entry';
import { ShoppingListElement } from './shopping-list-element/shopping-list-element';
import { ShoppingView } from './shopping-view/shopping-view';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingListElement, ShoppingView],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
})
export class ShoppingList {
  products: shoppingEntry[] = [];
  currentProduct: shoppingEntry | null = null;

  select(product: shoppingEntry): void {
    this.currentProduct = product;
  }

  addProduct(): void {
    const newProduct = new shoppingEntry('New', 'Entry');
    this.products = [newProduct, ...this.products];
    this.select(newProduct);

  deleteCurrent(): void {
    this.products = this.products.filter((product: shoppingEntry) => product !== this.currentProduct);
    this.currentProduct = null;
  }
  }
}
