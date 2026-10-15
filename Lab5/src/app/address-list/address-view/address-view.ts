import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AddressEntry} from '../address-entry';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-address-view',
  imports: [FormsModule],
  templateUrl: './address-view.html',
  styleUrls: ['./address-view.css']
})
export class AddressView implements OnInit {
  @Input({ required: true }) address!: AddressEntry;
  @Output() fireDelete: EventEmitter<AddressEntry> = new EventEmitter();
  @Output() fireSave: EventEmitter<AddressEntry> = new EventEmitter();
  public edit = true;

  constructor() { }

  ngOnInit(): void {
    this.edit = true;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  delete(): void {
    this.fireDelete.emit(this.address);
  }

  save(): void {
    this.fireSave.emit(this.address);
  }
}