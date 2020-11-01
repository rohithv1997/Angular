import { Ingredient } from 'src/models/ingredient.model';
import { AbstractShoppingListStoreAction } from './AbstractShoppingListStoreAction';
import { ShoppingListActionNames } from './ShoppingListActionNames';
import { IShoppingListState } from './IShoppingList.State';

const initialState: IShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex : -1
};

export function shoppingListReducer(state = initialState, action: AbstractShoppingListStoreAction): IShoppingListState {
  switch (action.type) {
    case ShoppingListActionNames.ADD_INGREDIENT:
    case ShoppingListActionNames.ADD_INGREDIENTS:
    case ShoppingListActionNames.UPDATE_INGREDIENT:
    case ShoppingListActionNames.DELETE_INGREDIENT:
    case ShoppingListActionNames.START_EDIT:
    case ShoppingListActionNames.STOP_EDIT:
      return action.execute(state);
    default:
      return state;
  }
}
