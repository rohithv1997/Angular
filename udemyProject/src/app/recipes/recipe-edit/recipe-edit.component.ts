import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/models/recipe.model';
import { RecipeUpdateInfo } from 'src/models/recipeUpdateInfo.model';
import { AddRecipe } from 'src/store/Recipes/Actions/AddRecipe';
import { UpdateRecipe } from 'src/store/Recipes/Actions/UpdateRecipe';
import * as fromApp from '../../../store/IAppState';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  private storeSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.IAppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm(): void {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      this.storeSubscription = this.store
        .select('recipes')
        .pipe(
          map((recipeState) => {
            return recipeState.recipes.find((recipe, index) => {
              return this.id === index;
            });
          })
        )
        .subscribe((recipeSelected) => {
          recipeName = recipeSelected.name;
          recipeImagePath = recipeSelected.imagePath;
          recipeDescription = recipeSelected.description;
          if (recipeSelected.ingredients) {
            for (const ingredient of recipeSelected.ingredients) {
              recipeIngredients.push(
                new FormGroup({
                  name: new FormControl(ingredient.name, Validators.required),
                  amount: new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/),
                  ]),
                })
              );
            }
          }
        });
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onSubmit(): void {
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );

    this.editMode
      ? this.store.dispatch(
          new UpdateRecipe(new RecipeUpdateInfo(this.id, newRecipe))
        )
      : this.store.dispatch(new AddRecipe(newRecipe));

    this.navigateAway();
  }

  private ingredientFormArray(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get ingredientControls(): AbstractControl[] {
    return this.ingredientFormArray().controls;
  }

  public onAddIngredient(): void {
    this.ingredientFormArray().push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  private navigateAway(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  public onCancel(): void {
    this.navigateAway();
  }

  public onDeleteIngredient(index: number): void {
    this.ingredientFormArray().removeAt(index);
  }

  public ngOnDestroy(): void {
    if (this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
  }
}
