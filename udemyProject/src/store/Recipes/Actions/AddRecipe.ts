import { Recipe } from 'src/models/recipe.model';
import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreAction';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class AddRecipe extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.ADD_RECIPE;

  constructor(public payload: Recipe) {
    super();
  }

  execute(state: IRecipeState): IRecipeState {
    return {
      ...state,
      recipes: [
        ...state.recipes,
        this.payload
      ]
    };
  }
}
