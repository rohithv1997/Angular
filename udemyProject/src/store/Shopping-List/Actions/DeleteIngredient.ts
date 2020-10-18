import { AbstractShoppingListStoreAction } from 'src/store/Shopping-List/AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../state/IShoppingList.State';

export class DeleteIngredient extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.DELETE_INGREDIENT;

  constructor() {
    super(null);
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      ingredients: state.ingredients.filter((ingredient, index) => {
        return index !== state.editedIngredientIndex;
      }),
      editedIngredientIndex: -1,
      editedIngredient: null
    };
  }
}
