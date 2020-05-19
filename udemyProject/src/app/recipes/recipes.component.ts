import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/helpers/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipeSelectedEvent().subscribe(
      (recipe: Recipe) => this.setSelectedRecipe(recipe)
    );
  }

  private setSelectedRecipe(incomingRecipe: Recipe): void {
    this.selectedRecipe = incomingRecipe;
  }

}
