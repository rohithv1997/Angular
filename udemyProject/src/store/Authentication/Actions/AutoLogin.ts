import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../State/IAuthentication.State';

export class AutoLogin extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.AUTO_LOGIN;

  constructor() {
    super(null);
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state
    };
  }
}
