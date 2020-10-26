import { AbstractAuthenticationStoreAction } from './AbstractAuthenticationStoreActions';
import { AuthenticationActionNames } from './AuthenticationActionNames';
import { IAuthenticationState } from './State/IAuthentication.State';

const initialState: IAuthenticationState = {
  user: null,
};

export function authenticationReducer(state = initialState, action: AbstractAuthenticationStoreAction): IAuthenticationState {
  switch (action.type){
    case AuthenticationActionNames.LOGIN:
    case AuthenticationActionNames.LOGOUT:
      return action.execute(state);
    default:
      return state;
  }
}
