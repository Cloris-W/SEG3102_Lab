import { Component, inject } from '@angular/core';
import { ShoppingEntry } from './shopping-entry';
import { ShoppingListElement } from './shopping-list-element/shopping-list-element';
import { ShoppingView } from './shopping-view/shopping-view';
import { NotificationService } from './notification-service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingListElement, ShoppingView],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
  providers: [NotificationService],
})
export class ShoppingList {
  products: ShoppingEntry[] = [];
  currentProduct: ShoppingEntry | null = null;
  notificationService = inject(NotificationService);

  select(product: ShoppingEntry): void {
    this.currentProduct = product;
    this.notificationService.selectElement(product);}

  addProduct(): void {
    const newProduct = new ShoppingEntry('New Product');
    this.products = [newProduct, ...this.products];
    this.select(newProduct);
  }

  deleteCurrent(): void {
    this.products = this.products.filter((product: ShoppingEntry) => product !== this.currentProduct);
    this.currentProduct = null;
  }
  }

