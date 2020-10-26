import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../State/IAuthentication.State';

export class LoginStart extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.LOGIN_START;

  constructor(public payload: { email: string; password: string }) {
    super(payload);
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      authError: null,
      isLoading: true
    };
  }
}
