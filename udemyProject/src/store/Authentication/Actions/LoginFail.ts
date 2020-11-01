import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class LoginFail extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGIN_FAIL;

  constructor(public payload: string) {
    super(payload);
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
