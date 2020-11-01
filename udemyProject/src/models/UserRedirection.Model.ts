import { User } from './user.model';

export class UserRedirection {
  constructor(public user: User, public isRedirectEnabled: boolean) { }
}
