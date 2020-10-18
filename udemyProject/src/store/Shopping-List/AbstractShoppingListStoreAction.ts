import { Action } from '@ngrx/store';
import { IShoppingListState } from './state/IShoppingList.State';

export abstract class AbstractShoppingListStoreAction implements Action {
  abstract readonly type: string;

  constructor(public payload: any) {}

  abstract execute(state: IShoppingListState): IShoppingListState;
}
