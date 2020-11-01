import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../IShoppingList.State';

export class StopEdit extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.STOP_EDIT;

  constructor() {
    super();
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      editedIngredient: null,
      editedIngredientIndex: -1,
    };
  }
}
