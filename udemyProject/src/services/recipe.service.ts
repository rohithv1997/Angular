import { Recipe } from 'src/helpers/recipe.model';
import { Constants } from 'src/helpers/constants';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/helpers/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    private recipes: Recipe[];
    private recipeSelected: Subject<Recipe>;

    constructor(private shoppingListService: ShoppingListService) {
        this.recipes = [];
        this.recipeSelected = new Subject<Recipe>();
        this.addRecipes();
    }

    private addRecipes(): void {
        this.recipes.push(
            new Recipe(
                'Tasty Schnitzel',
                'A super-tasty Schnitzel - just awesome!',
                Constants.SchnitzelLogo,
                [
                    new Ingredient('Meat', 1),
                    new Ingredient('French Fries', 20)
                ]));
        this.recipes.push(
            new Recipe(
                'Big Fat Burger',
                'What else you need to say?',
                Constants.BurgerLogo,
                [
                    new Ingredient('Bun', 2),
                    new Ingredient('Meat', 1)
                ]));
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    getRecipeSelectedEvent(): Subject<Recipe> {
        return this.recipeSelected;
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
