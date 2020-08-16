import { Ingredient } from 'src/models/ingredient.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    private ingredients: Ingredient[];
    private ingredientsChangedEvent: Subject<Ingredient[]>;
    private startedEditingEvent: Subject<number>;

    constructor() {
        this.ingredients = [];
        this.ingredientsChangedEvent = new Subject<Ingredient[]>();
        this.startedEditingEvent = new Subject<number>();

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

    public getStartedEditingEvent(): Subject<number> {
        return this.startedEditingEvent;
    }

    public getIngredient(index: number): Ingredient {
        return this.ingredients[index];
    }

    public updateIngredient(index: number, name: string, amount: number): void {
        this.ingredients[index] = new Ingredient(name, amount);
        this.emitIngredientsChangedEvent();
    }

    public deleteIngredient(index: number): void {
        this.ingredients.splice(index, 1);
        this.emitIngredientsChangedEvent();
    }
}
