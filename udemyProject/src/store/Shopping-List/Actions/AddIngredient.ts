import { Ingredient } from 'src/models/ingredient.model';
import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../IShoppingList.State';

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
