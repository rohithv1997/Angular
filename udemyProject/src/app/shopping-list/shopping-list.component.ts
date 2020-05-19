import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/helpers/ingredient.model';
import { ShoppingListService } from 'src/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = [];
  }

  ngOnInit() {
    this.setIngredients(this.shoppingListService.getIngredients());
    this.shoppingListService.getIngredientsChangedEvent().subscribe(
      (ingredients: Ingredient[]) => this.setIngredients(ingredients)
    );
  }

  private setIngredients(ingredients: Ingredient[]): void {
    this.ingredients = ingredients;
  }
}
