import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { DataService } from '../shared/data.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  user: User;
  isLoggedIn = false;
  data: string | undefined;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {
    this.user = this.userService.user;
    this.dataService.Details.then((data: string) => {
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
