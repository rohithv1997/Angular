import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/models/ingredient.model';
import { ShoppingListService } from 'src/services/shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm;
  private startedEditingSubscription: Subscription;
  public isEdit: boolean;
  private editedItemIndex: number;
  private editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
    this.isEdit = false;
  }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.getStartedEditingEvent()
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.isEdit = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm): void {
    const formValue = form.value;
    const formValueName = formValue.name;
    const formValueAmount = +formValue.amount;
    this.isEdit
      ? this.shoppingListService.updateIngredient(this.editedItemIndex, formValueName, formValueAmount)
      : this.shoppingListService.addIngredient(formValueName, formValueAmount);

    this.isEdit = false;
    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.isEdit = false;
  }

  onDelete(): void {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }
}
