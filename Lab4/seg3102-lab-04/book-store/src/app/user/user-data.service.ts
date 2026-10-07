import { Injectable } from '@angular/core';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userData: UserData | null = null;

  setUserData(userData: UserData): void {
    this.userData = userData;
  }

  getUserData(): UserData | null {
    return this.userData;
  }
}