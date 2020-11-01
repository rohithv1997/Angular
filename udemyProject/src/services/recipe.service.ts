import { Recipe } from 'src/models/recipe.model';
import { Constants } from 'src/helpers/constants';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddIngredients } from 'src/store/Shopping-List/Actions/AddIngredients';
import * as fromApp from '../store/IAppState';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    private recipes: Recipe[];
    private recipeSelected: Subject<Recipe>;
    private recipeChangedEvent: Subject<Recipe[]>;

    constructor(private store: Store<fromApp.IAppState>) {
        this.recipes = [];
        this.recipeSelected = new Subject<Recipe>();
        this.recipeChangedEvent = new Subject<Recipe[]>();
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

    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    public getRecipeSelectedEvent(): Subject<Recipe> {
        return this.recipeSelected;
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.store.dispatch(new AddIngredients(ingredients));
    }

    private emitRecipeChangedEvent(): void {
        this.recipeChangedEvent.next(this.getRecipes());
    }

    public getReceipeChangedEvent(): Subject<Recipe[]> {
        return this.recipeChangedEvent;
    }
}
