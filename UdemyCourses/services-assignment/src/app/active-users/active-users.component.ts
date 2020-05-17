import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Status } from '../../helpers/status.enum';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnInit {
  activeUsers: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userUpdated.subscribe(
      () => this.setActiveUsers()
    );
    this.setActiveUsers();
  }

  onSetToInactive(name: string) {
    this.userService.setUserStatus(name, Status.Inactive);
    this.userService.userUpdated.emit();
  }

  private setActiveUsers(): void {
    this.activeUsers = this.userService.getActiveUserNames();
  }
}
