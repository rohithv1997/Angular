import { Ingredient } from 'src/models/ingredient.model';

export interface IShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface IAppState{
  shoppingList: IShoppingListState;
}

