import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreAction';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class StoreRecipes extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.STORE_RECIPE;

  constructor() {
    super();
  }
  execute(state: IRecipeState): IRecipeState {
    return {
      ...state,
    };
  }
}
