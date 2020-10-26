import * as fromShoppingList from './Shopping-List/State/IShoppingList.State';
import * as fromAuthentication from './Authentication/State/IAuthentication.State';

export interface IAppState{
  shoppingList: fromShoppingList.IShoppingListState;
  authentication: fromAuthentication.IAuthenticationState;
}
