import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ShoppingEntry} from './shopping-entry';

@Injectable()
export class NotificationService {
  // Observable for selected elements
  selectedElement = new BehaviorSubject<ShoppingEntry | null>(null);
  constructor() { }

  public selectElement(product: ShoppingEntry): void {
    this.selectedElement.next(product);
  }

  public clearSelection(): void {
    this.selectedElement.next(null);
  }
}
