import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/helpers/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipeSelected = this.recipeService.getRecipe(this.id);
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
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit(): void {
    // console.log(this.recipeForm);
    const newRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients);

    this.editMode
      ? this.recipeService.updateRecipe(this.id, newRecipe)
      : this.recipeService.addRecipe(newRecipe);

    this.navigateAway();
  }

  private ingredientFormArray(): FormArray {
    return (this.recipeForm.get('ingredients') as FormArray);
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
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
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
}
