import { AbstractAuthenticationStoreAction } from './AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from './AuthenticationActionNames';
import { IAuthenticationState } from './State/IAuthentication.State';

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
      return action.execute(state);
    default:
      return state;
  }
}
