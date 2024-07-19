import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['username', 'workoutType', 'workoutMinutes'];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
  }
}
