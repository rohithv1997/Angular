import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "../models/recipe.model";
import {DataStorageService} from "./datastorage.service";
import {Observable} from "rxjs";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})

export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipeService.getRecipes();
    if (route.params.id > (recipes.length - 1)) {
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
    return (recipes.length === 0) ? this.dataStorageService.fetchRecipes() : recipes;
  }
}
