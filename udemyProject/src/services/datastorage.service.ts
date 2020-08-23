import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "./recipe.service";
import {environment} from "../environments/environment";
import {Recipe} from "../models/recipe.model";
import {exhaustMap, map, take, tap} from "rxjs/operators";
import {Observable, Subscription} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authenticationService: AuthenticationService) {
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
              recipe.ingredients ? recipe.ingredients : [])
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
