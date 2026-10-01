import { Component, EventEmitter, Input, Output, inject, OnDestroy, OnInit} from '@angular/core';
import { ShoppingEntry } from '../shopping-entry';
import {NotificationService} from '../notification-service';
import {Subscription} from 'rxjs';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-shopping-list-element',
  imports: [
    NgClass
  ],
  templateUrl: './shopping-list-element.html',
  styleUrl: './shopping-list-element.css'
})
export class ShoppingListElement implements OnInit, OnDestroy {
  @Input({ required: true }) shopping!: ShoppingEntry;
  @Output() remove = new EventEmitter<ShoppingEntry>();
  selected = false;
  subscription: Subscription | undefined;
  notificationService= inject(NotificationService);

  ngOnInit(): void {
    this.subscription = this.notificationService.selectedElement.subscribe(newshopping => {
      this.selected = newshopping === this.shopping;
    });
  }
  getFullName(): string {
    return `${this.shopping.productName}`;
  }

  delete(event: MouseEvent): void {
    event.stopPropagation();
    this.remove.emit(this.shopping);
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }
}
