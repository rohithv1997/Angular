import { Status } from './Server.Enum';

export class Server {
    constructor(public id: number, public name: string, public status: Status) { }

    public getStatus(): string {
        return Status[this.status];
    }
}
