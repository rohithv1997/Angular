import { Ingredient } from 'src/helpers/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[];
    private ingredientsChangedEvent: EventEmitter<Ingredient[]>;

    constructor() {
        this.ingredients = [];
        this.ingredientsChangedEvent = new EventEmitter<Ingredient[]>();

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
        this.ingredientsChangedEvent.emit(this.getIngredients());
    }

    public addIngredient(name: string, amount: number): void {
        this.ingredients.push(new Ingredient(name, amount));
        this.emitIngredientsChangedEvent();
    }

    public getIngredientsChangedEvent(): EventEmitter<Ingredient[]> {
        return this.ingredientsChangedEvent;
    }

    public addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.emitIngredientsChangedEvent();
    }
}
