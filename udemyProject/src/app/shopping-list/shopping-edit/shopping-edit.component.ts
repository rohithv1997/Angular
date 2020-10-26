import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/models/ingredient.model';
import { AddIngredient } from 'src/store/Shopping-List/Actions/AddIngredient';
import { DeleteIngredient } from 'src/store/Shopping-List/Actions/DeleteIngredient';
import { StopEdit } from 'src/store/Shopping-List/Actions/StopEdit';
import { UpdateIngredient } from 'src/store/Shopping-List/Actions/UpdateIngredient';
import * as fromApp from '../../../store/IAppState';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm;
  private startedEditingSubscription: Subscription;
  public isEdit: boolean;
  private editedItem: Ingredient;

  constructor(
    private store: Store<fromApp.IAppState>
  ) {
    this.isEdit = false;
  }

  ngOnInit() {
    this.startedEditingSubscription = this.store.select('shoppingList')
      .subscribe((stateData) => {
        if (stateData.editedIngredientIndex > -1) {
          this.isEdit = true;
          this.editedItem = stateData.editedIngredient;
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount,
          });
        } else {
          this.isEdit = false;
        }
      });
  }

  onSubmit(form: NgForm): void {
    const formValue = form.value;
    const formValueName = formValue.name;
    const formValueAmount = +formValue.amount;
    const ingredient = new Ingredient(formValueName, formValueAmount);
    this.isEdit
      ? this.store.dispatch(new UpdateIngredient(ingredient))
      : this.store.dispatch(new AddIngredient(ingredient));

    this.isEdit = false;
    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.isEdit = false;
    this.store.dispatch(new StopEdit());
  }

  onDelete(): void {
    this.store.dispatch(new DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
    this.store.dispatch(new StopEdit());
  }
}
