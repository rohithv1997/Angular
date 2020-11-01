import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/IAppState';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeChangedEventSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromApp.IAppState>
  ) {}

  ngOnInit() {
    this.recipeChangedEventSubscription = this.store
      .select('recipes')
      .pipe(map((recipeState) => recipeState.recipes))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy() {
    this.recipeChangedEventSubscription.unsubscribe();
  }
}
