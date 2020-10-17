import {Action} from '@ngrx/store';
import {Ingredient} from 'src/models/ingredient.model';
import {ShoppingListActionNames} from './Actions';

export class AddIngredient implements Action {
  readonly type = ShoppingListActionNames.ADD_INGREDIENT;
  public payload: Ingredient;
}
