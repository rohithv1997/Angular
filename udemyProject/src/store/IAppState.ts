import * as fromShoppingList from './Shopping-List/IShoppingList.State';
import * as fromAuthentication from './Authentication/IAuthentication.State';
import * as fromRecipe from './Recipes/IRecipe.State';

export interface IAppState{
  shoppingList: fromShoppingList.IShoppingListState;
  authentication: fromAuthentication.IAuthenticationState;
  recipes: fromRecipe.IRecipeState;
}
