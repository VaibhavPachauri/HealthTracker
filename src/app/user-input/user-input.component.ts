import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../user.model';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() userAdded = new EventEmitter<void>();

  username: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private userDataService: UserDataService) {}

  addUser() {
    const newUser: User = {
      username: this.username,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes
    };
    this.userDataService.addUser(newUser);
    this.clearForm();
    this.userAdded.emit();
  }

  clearForm() {
    this.username = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
