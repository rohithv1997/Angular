import { ActionReducerMap } from '@ngrx/store';
import { shoppingListReducer } from './Shopping-List/shopping-list.reducer';
import { authenticationReducer } from './Authentication/authentication.reducer';
import { IAppState } from './IAppState';

export const appReducer: ActionReducerMap<IAppState> = {
  shoppingList: shoppingListReducer,
  authentication: authenticationReducer
};
