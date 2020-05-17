import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Status } from '../../helpers/status.enum';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userUpdated.subscribe(
      () => this.setInactiveUsers()
    );
    this.setInactiveUsers();
  }

  onSetToActive(name: string) {
    this.userService.setUserStatus(name, Status.Active);
    this.userService.userUpdated.emit();
  }

  private setInactiveUsers(): void {
    this.inactiveUsers = this.userService.getInactiveUserNames();
  }
}
