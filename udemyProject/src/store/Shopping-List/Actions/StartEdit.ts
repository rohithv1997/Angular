import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../IShoppingList.State';

export class StartEdit extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.START_EDIT;

  constructor(public payload: number) {
    super(payload);
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      editedIngredientIndex: this.payload,
      editedIngredient: { ...state.ingredients[this.payload] },
    };
  }
}
