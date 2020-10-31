import { Injectable } from '@angular/core';
import { Constants } from 'src/helpers/constants';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public setUser(user: User): void {
    localStorage.setItem(Constants.LocalStorageKey, JSON.stringify(user));
  }

  public removeUser(): void {
    localStorage.removeItem(Constants.LocalStorageKey);
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(Constants.LocalStorageKey));
  }
}
