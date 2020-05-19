import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Constants } from 'src/helpers/constants';
import { ShoppingListService } from 'src/services/shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild(Constants.nameInput) nameInputReference: ElementRef;
  @ViewChild(Constants.amountInput) amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() { }

  onAddItem(): void {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    this.shoppingListService.addIngredient(ingName, ingAmount);
  }
}
