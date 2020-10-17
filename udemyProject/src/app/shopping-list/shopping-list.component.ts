import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/models/ingredient.model';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShoppingListStore } from 'src/models/shopping-list.store';
import { ShoppingListDetails } from 'src/models/shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListDetails: Observable<ShoppingListDetails>;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<ShoppingListStore>
  ) {}

  ngOnInit() {
    this.shoppingListDetails = this.store.select('shoppingList');
  }

  public onEditItem(index: number): void {
    this.shoppingListService.getStartedEditingEvent().next(index);
  }

  ngOnDestroy() {
    // this.ingredientsChangedEventSubscription.unsubscribe();
  }
}
