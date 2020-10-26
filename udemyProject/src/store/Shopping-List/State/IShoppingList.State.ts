import { Ingredient } from 'src/models/ingredient.model';
import { IState } from 'src/store/IState';

export interface IShoppingListState extends IState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}
