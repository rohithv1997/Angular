import { AbstractRecipeStoreAction } from './AbstractRecipeStoreAction';
import { IRecipeState } from './IRecipe.State';
import { RecipeActionNames } from './RecipeActionNames';

const initialState: IRecipeState = {
  recipes: null,
};

export function recipesReducer(state = initialState, action: AbstractRecipeStoreAction): IRecipeState {
  switch (action.type) {
    case RecipeActionNames.SET_RECIPES:
    case RecipeActionNames.FETCH_RECIPES:
    case RecipeActionNames.ADD_RECIPE:
    case RecipeActionNames.UPDATE_RECIPE:
    case RecipeActionNames.DELETE_RECIPE:
    case RecipeActionNames.STORE_RECIPE:
      return action.execute(state);
    default:
      return state;
  }
}
