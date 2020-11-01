import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './IAppState';
import * as fromShoppingList from './Shopping-List/shopping-list.reducer';
import * as fromAuthentication from './Authentication/authentication.reducer';
import * as fromRecipes from './Recipes/recipes.reducer';

export const appReducer: ActionReducerMap<IAppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  authentication: fromAuthentication.authenticationReducer,
  recipes: fromRecipes.recipesReducer
};
