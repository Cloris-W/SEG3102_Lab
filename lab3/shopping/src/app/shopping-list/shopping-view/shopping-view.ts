import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {ShoppingEntry} from '../shopping-entry';
import { FormsModule } from '@angular/forms';

export class ShoppingView implements OnInit {
  @Input() shopping!: ShoppingEntry;
  @Output() fireDelete: EventEmitter<ShoppingEntry> = new EventEmitter();
  edit: boolean | undefined;

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.shopping);
  }
}