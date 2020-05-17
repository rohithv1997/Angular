import { UserDto } from '../helpers/UserDto.model';
import { Status } from '../helpers/status.enum';
import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users: UserDto[] = [];

    userUpdated = new EventEmitter<void>();

    constructor(private counterService: CounterService) {
        this.addUsers('Max', Status.Active);
        this.addUsers('Anna', Status.Active);
        this.addUsers('Chris', Status.Inactive);
        this.addUsers('Liz', Status.Inactive);
    }

    addUsers(name: string, status: Status): void {
        this.users.push(this.createUserDto(name, status));
    }

    setUserStatus(name: string, status: Status) {
        this.users.filter(x => x.name === name)[0].status = status;
        this.updateCounter(status);
    }

    private createUserDto(name: string, status: Status): UserDto {
        return new UserDto(name, status);
    }

    getActiveUserNames(): string[] {
        return this.getUserNames(Status.Active);
    }

    getInactiveUserNames(): string[] {
        return this.getUserNames(Status.Inactive);
    }

    private getUserNames(status: Status): string[] {
        const inactiveUserNames: string[] = [];
        const inactiveUsers = this.users.filter(x => x.status === status);
        for (const inactiveUser of inactiveUsers) {
            inactiveUserNames.push(inactiveUser.name);
        }
        return inactiveUserNames;
    }

    private updateCounter(status: Status): void {
        if (status === Status.Active) {
            this.counterService.incrementInactiveToActive();
        } else {
            this.counterService.incrementActiveToInactive();
        }
    }
}
