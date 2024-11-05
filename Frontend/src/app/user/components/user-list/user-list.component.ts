import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  /**
   * Loads all users and handles errors
   */
  loadAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => this.users = users,
      error: (error) => {
        this.errorMessage = 'Failed to load users';
        console.error('Error loading users:', error);
      }
    });
  }
}
