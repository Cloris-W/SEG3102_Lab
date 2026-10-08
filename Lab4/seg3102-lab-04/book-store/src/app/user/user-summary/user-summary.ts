import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserData } from '../user-data';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-summary',
  imports: [RouterLink],
  templateUrl: './user-summary.html',
  styleUrl: './user-summary.css',
})
export class UserSummary {
  private userDataService = inject(UserDataService);

  userData: UserData | null = this.userDataService.getUserData();
}