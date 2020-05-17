import { Status } from './status.enum';

export class UserDto {
    constructor(public name: string, public status: Status) { }
}
