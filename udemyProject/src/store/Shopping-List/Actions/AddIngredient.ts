import { Ingredient } from 'src/models/ingredient.model';
import { AbstractShoppingListStoreAction } from 'src/store/Shopping-List/AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../state/IShoppingList.State';

export class AddIngredient extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
    super(payload);
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      ingredients: [...state.ingredients, this.payload],
    };
  }
}
