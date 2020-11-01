import { User } from 'src/models/user.model';
import { IState } from 'src/store/IState';

export interface IAuthenticationState extends IState {
  user: User;
  authError: string;
  isLoading: boolean;
}
