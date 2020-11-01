import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class LoginFail extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGIN_FAIL;

  constructor(public payload: string) {
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      user: null,
      authError: this.payload,
      isLoading: true
    };
  }
}
