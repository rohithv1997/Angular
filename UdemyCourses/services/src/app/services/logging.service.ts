import { Status } from '../helpers/status.Enum';

export class LoggingService {
    static readonly genericSuccessMessage = 'A Server status changed, new status : ';
    static readonly failureMessage = 'Error in casting Enum';
    logStatusChange(newStatus: string) {
        if (newStatus in Status) {
            this.logMessage(LoggingService.genericSuccessMessage + status);
        } else {
            this.logMessage(LoggingService.failureMessage);
        }
    }

    private logMessage(message: string) {
        console.log(message);
    }
}
