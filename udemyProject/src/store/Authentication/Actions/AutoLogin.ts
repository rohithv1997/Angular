import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class AutoLogin extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.AUTO_LOGIN;

  constructor() {
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state
    };
  }
}
