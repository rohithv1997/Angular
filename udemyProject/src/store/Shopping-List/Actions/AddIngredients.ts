import { Ingredient } from 'src/models/ingredient.model';
import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../IShoppingList.State';

export class AddIngredients extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
    super();
  }

  execute(state: IShoppingListState): IShoppingListState {
    return {
      ...state,
      ingredients: [...state.ingredients, ...this.payload],
    };
  }
}
