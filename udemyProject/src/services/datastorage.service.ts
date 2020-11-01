import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from './recipe.service';
import {environment} from '../environments/environment';
import {Recipe} from '../models/recipe.model';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IAppState';
import { SetRecipes } from 'src/store/Recipes/Actions/SetRecipes';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private store: Store<fromApp.IAppState>) {
  }

  public storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(
      environment.firebaseRealtimeDatabaseUrl,
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }

  public fetchRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(environment.firebaseRealtimeDatabaseUrl)
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return new Recipe(
              recipe.name,
              recipe.description,
              recipe.imagePath,
              recipe.ingredients ? recipe.ingredients : []);
          });
        }),
        tap(recipes => {
          this.store.dispatch(new SetRecipes(recipes));
        })
      );
  }
}
