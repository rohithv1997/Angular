import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsChangedEventSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = [];
  }

  ngOnInit() {
    this.setIngredients(this.shoppingListService.getIngredients());
    this.ingredientsChangedEventSubscription = this.shoppingListService.getIngredientsChangedEvent().subscribe(
      (ingredients: Ingredient[]) => this.setIngredients(ingredients)
    );
  }

  private setIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
  }

  public onEditItem(index: number): void {
    this.shoppingListService.getStartedEditingEvent().next(index);
  }

  ngOnDestroy() {
    this.ingredientsChangedEventSubscription.unsubscribe();
  }
}
