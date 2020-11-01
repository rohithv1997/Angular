import { AbstractAuthenticationStoreAction } from './AbstractAuthenticationStoreAction';
import { AuthenticationActionNames } from './AuthenticationActionNames';
import { IAuthenticationState } from './IAuthentication.State';

const initialState: IAuthenticationState = {
  user: null,
  authError: null,
  isLoading: false
};

export function authenticationReducer(state = initialState, action: AbstractAuthenticationStoreAction): IAuthenticationState {
  switch (action.type){
    case AuthenticationActionNames.LOGIN:
    case AuthenticationActionNames.LOGOUT:
    case AuthenticationActionNames.LOGIN_START:
    case AuthenticationActionNames.LOGIN_FAIL:
    case AuthenticationActionNames.SIGNUP:
    case AuthenticationActionNames.SIGNUP_START:
    case AuthenticationActionNames.CLEAR_ERROR:
    case AuthenticationActionNames.AUTO_LOGIN:
      return action.execute(state);
    default:
      return state;
  }
}
