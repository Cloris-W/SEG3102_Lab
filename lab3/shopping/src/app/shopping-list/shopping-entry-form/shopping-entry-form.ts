import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry-form',
  imports: [FormsModule],
  templateUrl: './shopping-entry-form.html',
  styleUrl: './shopping-entry-form.css',
})
export class ShoppingEntryForm {
  productName = '';

  @Output() productAdded = new EventEmitter<string>();

  submit(): void {
    const productName = this.productName.trim();
    if (!productName) {
      return;
    }

    this.productAdded.emit(productName);
    this.productName = '';
  }
}
