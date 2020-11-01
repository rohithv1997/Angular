import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RecipeActionNames } from '../RecipeActionNames';
import * as fromApp from '../../IAppState';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreRecipesEffect {
  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromApp.IAppState>
  ) {}

  @Effect({
    dispatch: false
  })
  public storeRecipes = this.actions$.pipe(
    ofType(RecipeActionNames.STORE_RECIPE),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.httpClient.put(
        environment.firebaseRealtimeDatabaseUrl,
        recipesState.recipes
      );
    })
  );
}
