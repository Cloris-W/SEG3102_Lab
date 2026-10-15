import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AddressDbService } from '../firestore/address-db-service';

@Component({
  selector: 'app-address-table',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './address-table.html',
})
export class AddressTable {
  private store = inject(AddressDbService);
  addresses$ = this.store.getAddresses();
}
