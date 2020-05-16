import { Status } from './status.Enum';

export class AccountsDto {
    constructor(public name: string, public status: Status) { }
}
