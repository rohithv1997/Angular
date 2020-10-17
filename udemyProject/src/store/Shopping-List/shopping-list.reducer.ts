import {Ingredient} from 'src/models/ingredient.model';
import {ShoppingListActionNames} from './Actions';
import * as ShoppingListActions from './ShoppingListActions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
  switch (action.type) {
    case ShoppingListActionNames.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload
        ]
      };
      default:
        return state;
  }
}
