import { LoginInfo } from 'src/models/logininfo.model';
import { AbstractAuthenticationStoreAction } from '../AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from '../AuthenticationActionNames';
import { IAuthenticationState } from '../IAuthentication.State';

export class Signup extends AbstractAuthenticationStoreAction{
  readonly type = AuthenticationActionNames.SIGNUP;

  constructor(public payload: LoginInfo){
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
