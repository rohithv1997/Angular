import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../State/IAuthentication.State';

export class ClearError extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.CLEAR_ERROR;

  constructor(){
    super(null);
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      authError: null
    };
  }

}
