import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class ClearError extends AbstractAuthenticationStoreAction {
  readonly type = AuthenticationActionNames.CLEAR_ERROR;

  constructor(){
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      authError: null
    };
  }

}
