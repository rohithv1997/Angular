import { AbstractRecipeStoreAction } from './AbstractRecipeStoreActions';
import { IRecipeState } from './IRecipe.State';
import { RecipeActionNames } from './RecipeActionNames';

const initialState: IRecipeState = {
  recipes: null,
};

export function recipesReducer(state = initialState, action: AbstractRecipeStoreAction): IRecipeState {
  switch (action.type) {
    case RecipeActionNames.SET_RECIPES:
      return action.execute(state);
    default:
      return state;
  }
}
