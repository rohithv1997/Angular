import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../state/IShoppingList.State';

export class StopEdit extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.STOP_EDIT;

  constructor() {
    super(null);
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      editedIngredient: null,
      editedIngredientIndex: -1,
    };
  }
}
