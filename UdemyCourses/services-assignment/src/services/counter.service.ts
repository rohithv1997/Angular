export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    constructor() { }

    incrementActiveToInactive(): void {
        this.activeToInactiveCounter++;
        this.logMessage('Active to Inactive counter : ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive(): void {
        this.inactiveToActiveCounter++;
        this.logMessage('Inactive to Active counter : ' + this.inactiveToActiveCounter);
    }

    private logMessage(message: string): void {
        console.log(message);
    }
}
