import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from 'src/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromApp from '../../../store/IAppState';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { DeleteRecipe } from 'src/store/Recipes/Actions/DeleteRecipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.IAppState>
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        map((params) => {
          return +params.id;
        }),
        switchMap((id) => {
          this.id = id;
          return this.store.select('recipes');
        }),
        map((recipesState) => {
          return recipesState.recipes.find((recipe, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  onDeleteRecipe(): void {
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}
