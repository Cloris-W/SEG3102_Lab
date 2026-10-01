import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoppingEntry } from './shopping-entry';
import { ShoppingListElement } from './shopping-list-element/shopping-list-element';
import { ShoppingView } from './shopping-view/shopping-view';
import { NotificationService } from './notification-service';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule, ShoppingListElement, ShoppingView],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css',
  providers: [NotificationService],
})
export class ShoppingList {
  products: ShoppingEntry[] = [];
  currentProduct: ShoppingEntry | null = null;
  newProductName = '';
  notificationService = inject(NotificationService);

  select(product: ShoppingEntry): void {
    this.currentProduct = product;
    this.notificationService.selectElement(product);
  }

  addProduct(): void {
    const productName = this.newProductName.trim();
    if (!productName) {
      return;
    }

    const newProduct = new ShoppingEntry(productName);
    this.products = [newProduct, ...this.products];
    this.select(newProduct);
    this.newProductName = '';
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
    }
  }
}
