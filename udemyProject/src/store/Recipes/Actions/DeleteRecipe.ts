import { AbstractRecipeStoreAction } from '../AbstractRecipeStoreAction';
import { IRecipeState } from '../IRecipe.State';
import { RecipeActionNames } from '../RecipeActionNames';

export class DeleteRecipe extends AbstractRecipeStoreAction {
  readonly type = RecipeActionNames.DELETE_RECIPE;

  constructor(public payload: number) {
    super();
  }

  execute(state: IRecipeState): IRecipeState {
    return {
      ...state,
      recipes: state.recipes.filter((recipe, index) => {
        return index !== this.payload;
      }),
    };
  }
}
