import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { AccountsDto } from './helpers/AccountsDto.model';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: AccountsDto[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
