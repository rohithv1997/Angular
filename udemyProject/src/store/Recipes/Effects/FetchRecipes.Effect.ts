import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Recipe } from 'src/models/recipe.model';
import { SetRecipes } from '../Actions/SetRecipes';
import { RecipeActionNames } from '../RecipeActionNames';

@Injectable()
export class FetchRecipesEffect {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  @Effect()
  public fetchRecipes: Observable<SetRecipes> = this.actions$.pipe(
    ofType(RecipeActionNames.FETCH_RECIPES),
    switchMap(() => {
      return this.httpClient.get<Recipe[]>(
        environment.firebaseRealtimeDatabaseUrl
      );
    }),
    map((recipes) => {
      return recipes.map((recipe) => {
        return new Recipe(
          recipe.name,
          recipe.description,
          recipe.imagePath,
          recipe.ingredients ? recipe.ingredients : []
        );
      });
    }),
    map((recipes) => {
      return new SetRecipes(recipes);
    })
  );
}
