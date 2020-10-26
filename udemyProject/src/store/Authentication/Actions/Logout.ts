import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../State/IAuthentication.State';

export class Logout extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGOUT;

  constructor() {
    super(null);
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
