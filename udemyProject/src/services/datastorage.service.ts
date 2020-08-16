import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "./recipe.service";
import {environment} from "../environments/environment";
import {Recipe} from "../models/recipe.model";
import {map, tap} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {
  }

  public storeRecipes(): void {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(
      environment.firebaseUrl,
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }

  public fetchRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(
      environment.firebaseUrl
    )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return new Recipe(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients ? recipe.ingredients : [])
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        }));
  }
}
