import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ShoppingEntry} from '../shopping-entry';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-shopping-view',
    templateUrl: './shopping-view.html',
    styleUrls: ['./shopping-view.css'],
    imports: [FormsModule]
})
export class ShoppingView {
  private currentShopping!: ShoppingEntry;
  productName = '';

  @Input({ required: true })
  set shopping(product: ShoppingEntry) {
    this.currentShopping = product;
    this.productName = product.productName;
  }

  get shopping(): ShoppingEntry {
    return this.currentShopping;
  }

  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  @Output() updated = new EventEmitter<ShoppingEntry>();

  update(): void {
    const updatedName = this.productName.trim();
    if (updatedName) {
      this.shopping.productName = updatedName;
      this.updated.emit(this.shopping);
    }
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}
