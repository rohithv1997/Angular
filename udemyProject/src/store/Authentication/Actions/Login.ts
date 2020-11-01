import { UserRedirection } from 'src/models/UserRedirection.Model';
import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class Login extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGIN;

  constructor(public payload: UserRedirection) {
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      user: this.payload.user,
      authError: null,
      isLoading: false,
    };
  }
}
