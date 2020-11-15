import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IAppState';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private router: Router,
    private store: Store<fromApp.IAppState>
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.store.select('recipes').pipe(
      map((recipeState) =>  {
        const recipes = recipeState.recipes;
        if (recipes === null || recipes === undefined || route.params.id > recipes.length - 1) {
          this.router.navigateByUrl('/auth').then(r => r);
        }
        return recipes;
      }),
      take(1)
    );
  }
}
