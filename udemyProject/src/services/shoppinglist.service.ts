import { Ingredient } from 'src/helpers/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[];
    private ingredientsChangedEvent: Subject<Ingredient[]>;

    constructor() {
        this.ingredients = [];
        this.ingredientsChangedEvent = new Subject<Ingredient[]>();

        this.initializeIngredients();
    }

    private initializeIngredients(): void {
        this.addIngredient('Apples', 5);
        this.addIngredient('Tomatoes', 10);
    }

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    private emitIngredientsChangedEvent(): void {
        this.ingredientsChangedEvent.next(this.getIngredients());
    }

    public addIngredient(name: string, amount: number): void {
        this.ingredients.push(new Ingredient(name, amount));
        this.emitIngredientsChangedEvent();
    }

    public getIngredientsChangedEvent(): Subject<Ingredient[]> {
        return this.ingredientsChangedEvent;
    }

    public addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.emitIngredientsChangedEvent();
    }
}
