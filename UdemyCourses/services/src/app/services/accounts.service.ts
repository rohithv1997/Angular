import { AccountsDto } from '../helpers/AccountsDto.model';
import { Status } from '../helpers/status.Enum';

export class AccountsService {
    accounts: AccountsDto[] = [];

    constructor() {
        this.addAccount('Master Account', 'Active');
        this.addAccount('Testaccount', 'Inactive');
        this.addAccount('HiddenAccount', 'Unknown');
    }

    addAccount(name: string, status: string) {
        this.accounts.push(this.createAccountsDto(name, status));
    }

    updateAccount(id: number, status: string): void {
        this.accounts[id].status = Status[status] as Status;
    }

    private createAccountsDto(name: string, status: string): AccountsDto {
        return new AccountsDto(name, Status[status] as Status);
    }
}
