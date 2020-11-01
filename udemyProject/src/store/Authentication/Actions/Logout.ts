import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class Logout extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGOUT;

  constructor() {
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      user: null,
      authError: null,
      isLoading: false
    };
  }
}
