import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private STORAGE_KEY = 'user_data';

  constructor() { }

  getUsers(): User[] {
    const usersData = localStorage.getItem(this.STORAGE_KEY);
    return usersData ? JSON.parse(usersData) : [];
  }

  addUser(user: User): void {
    let users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }
}
