import { Ingredient } from 'src/models/ingredient.model';
import { AbstractShoppingListStoreAction } from '../AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from '../ShoppingListActionNames';
import { IShoppingListState } from '../state/IShoppingList.State';

export class UpdateIngredient extends AbstractShoppingListStoreAction {
  readonly type = ShoppingListActionNames.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
    super(payload);
  }

  execute(state: IShoppingListState): IShoppingListState {
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...ingredient,
      ...this.payload
    } as Ingredient;
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredientIndex: -1,
      editedIngredient: null
    };
  }
}
