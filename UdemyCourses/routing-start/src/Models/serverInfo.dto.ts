import { Status } from './Server.Enum';

export class ServerInfo {
    constructor(public name: string, public status: Status) { }
}
