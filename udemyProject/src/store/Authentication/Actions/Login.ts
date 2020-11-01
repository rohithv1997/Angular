import { User } from 'src/models/user.model';
import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class Login extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGIN;

  constructor(public payload: User) {
    super(payload);
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      user: this.payload,
      authError: null,
      isLoading: false
    };
  }
}
