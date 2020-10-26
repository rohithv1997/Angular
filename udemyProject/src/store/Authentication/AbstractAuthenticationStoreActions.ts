import { AbstractStoreAction } from '../AbstractStoreAction';
import { IAuthenticationState } from './State/IAuthentication.State';

export abstract class AbstractAuthenticationStoreAction extends AbstractStoreAction<IAuthenticationState>{
}
