import { Recipe } from 'src/models/recipe.model';
import { RecipeUpdateInfo } from 'src/models/recipeUpdateInfo.model';
import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreAction';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class UpdateRecipe extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.UPDATE_RECIPE;

  constructor(public payload: RecipeUpdateInfo) {
    super();
  }

  execute(state: IRecipeState): IRecipeState {
    const recipe = state.recipes[this.payload.index];
    const updatedRecipe = {
      ...recipe,
      ...this.payload.newRecipe,
    } as Recipe;
    const updatedRecipes = [...state.recipes];
    updatedRecipes[this.payload.index] = updatedRecipe;
    return {
      ...state,
      recipes: updatedRecipes,
    };
  }
}
