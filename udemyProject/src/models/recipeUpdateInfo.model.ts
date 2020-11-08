import {Recipe} from './recipe.model';

export class RecipeUpdateInfo {
  constructor(
    public index: number,
    public newRecipe: Recipe) {
  }
}
