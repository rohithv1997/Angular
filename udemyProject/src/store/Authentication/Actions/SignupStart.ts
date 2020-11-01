import { LoginInfo } from 'src/models/logininfo.model';
import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class SignupStart extends AbstractAuthenticationStoreAction{
  readonly type = AuthenticationActionNames.SIGNUP_START;

  constructor(public payload: LoginInfo){
    super();
  }

  execute(state: IAuthenticationState): IAuthenticationState {
    return {
      ...state,
      authError: null,
      isLoading: true
    };
  }

}
