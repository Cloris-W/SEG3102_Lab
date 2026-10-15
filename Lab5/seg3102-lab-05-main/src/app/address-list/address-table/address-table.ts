import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AddressEntry } from '../address-entry';
import { NotificationService } from '../notification-service';

@Component({
  selector: 'app-address-table',
  imports: [],
  templateUrl: './address-table.html',
})
export class AddressTable {
  private notificationService: NotificationService = inject(NotificationService);
  private router: Router = inject(Router);

  get address(): AddressEntry | null {
    return this.notificationService.selectedElement.value;
  }

  addContact(): void {
    this.notificationService.addAddress();
    this.router.navigate(['/addresses']).then(() => {});
  }
}
