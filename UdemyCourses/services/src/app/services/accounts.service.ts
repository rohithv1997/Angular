import { AccountsDto } from '../helpers/AccountsDto.model';
import { Status } from '../helpers/status.Enum';
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {

    constructor(private loggingService: LoggingService) {
        this.addAccount('Master Account', 'Active');
        this.addAccount('Testaccount', 'Inactive');
        this.addAccount('HiddenAccount', 'Unknown');
    }
    accounts: AccountsDto[] = [];

    statusUpdated = new EventEmitter<string>();

    addAccount(name: string, status: string) {
        this.accounts.push(this.createAccountsDto(name, status));
        this.loggingService.logStatusChange(status);
    }

    updateAccount(id: number, status: string): void {
        this.accounts[id].status = Status[status] as Status;
        this.loggingService.logStatusChange(status);
    }

    private createAccountsDto(name: string, status: string): AccountsDto {
        return new AccountsDto(name, Status[status] as Status);
    }
}
