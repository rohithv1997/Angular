import { Recipe } from 'src/models/recipe.model';
import { IState } from '../IState';

export interface IRecipeState extends IState {
  recipes: Recipe[];
}
