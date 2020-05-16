import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';
import { Status } from '../helpers/status.Enum';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ActiveStatus = Status[Status.Active];
  InactiveStatus = Status[Status.Inactive];
  UnknownStatus = Status[Status.Unknown];

  Statuses: string[] = [this.ActiveStatus, this.InactiveStatus, this.UnknownStatus];

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }

  ngOnInit(): void {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        alert('New Status: ' + status);
      });
  }
}
