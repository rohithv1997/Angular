import { authEffects } from './Authentication/authentication.effects';
import { recipeEffects } from './Recipes/recipe.effects';

export const appEffects = [
  ...authEffects,
  ...recipeEffects
];
