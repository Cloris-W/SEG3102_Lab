import { Component, inject } from '@angular/core';
import { ShoppingEntry } from './shopping-entry';
import { ShoppingEntryForm } from './shopping-entry-form/shopping-entry-form';
import { ShoppingListElement } from './shopping-list-element/shopping-list-element';
import { ShoppingView } from './shopping-view/shopping-view';
import { NotificationService } from './notification-service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEntryForm, ShoppingListElement, ShoppingView],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
  providers: [NotificationService],
})
export class ShoppingList {
  products: ShoppingEntry[] = [];
  currentProduct: ShoppingEntry | null = null;
  notificationService = inject(NotificationService);

  select(product: ShoppingEntry): void {
    if (this.currentProduct === product) {
      this.currentProduct = null;
      this.notificationService.clearSelection();
      return;
    }

    this.currentProduct = product;
    this.notificationService.selectElement(product);
  }

  addProduct(productName: string): void {
    const trimmedProductName = productName.trim();
    if (!trimmedProductName) {
      return;
    }

    const newProduct = new ShoppingEntry(trimmedProductName);
    this.products = [newProduct, ...this.products];
    this.select(newProduct);
  }

  deleteCurrent(): void {
    if (this.currentProduct) {
      this.deleteProduct(this.currentProduct);
    }
  }

  deleteProduct(productToDelete: ShoppingEntry): void {
    this.products = this.products.filter(product => product !== productToDelete);
    if (this.currentProduct === productToDelete) {
      this.currentProduct = null;
      this.notificationService.clearSelection();
    }
  }

  updateProduct(updatedProduct: ShoppingEntry): void {
    const replacement = new ShoppingEntry(updatedProduct.productName);
    this.products = this.products.map(product =>
      product === updatedProduct ? replacement : product
    );

    if (this.currentProduct === updatedProduct) {
      this.currentProduct = replacement;
      this.notificationService.selectElement(replacement);
    }
  }
}
