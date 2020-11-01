import { Recipe } from 'src/models/recipe.model';
import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreActions';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class SetRecipes extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.SET_RECIPES;

  constructor(public payload: Recipe[]) {
    super(payload);
  }

  execute(state: IRecipeState): IRecipeState {
    return {
      ...state,
      recipes: [
        ...this.payload
      ]
    };
  }
}
