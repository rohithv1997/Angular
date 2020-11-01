import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreAction';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class FetchRecipes extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.FETCH_RECIPES;

  constructor() {
    super();
  }

  execute(state: IRecipeState): IRecipeState {
    return {
      ...state
    };
  }

}
