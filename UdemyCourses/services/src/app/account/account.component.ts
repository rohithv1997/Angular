import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsDto } from '../helpers/AccountsDto.model';
import { AccountsService } from '../services/accounts.service';
import { Status } from '../helpers/status.Enum';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ActiveStatus = Status[Status.Active];
  InactiveStatus = Status[Status.Inactive];
  UnknownStatus = Status[Status.Unknown];

  @Input() account: AccountsDto;
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }

  getAccountStatus(): string {
    return Status[this.account.status];
  }
}
