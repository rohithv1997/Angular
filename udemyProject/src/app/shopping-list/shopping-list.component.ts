import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from 'src/services/shoppinglist.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from '../../store/Shopping-List/State/IShoppingList.State';
import { StartEdit } from 'src/store/Shopping-List/Actions/StartEdit';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListDetails: Observable<fromShoppingList.IShoppingListState>;

  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.IAppState>
  ) {}

  ngOnInit() {
    this.shoppingListDetails = this.store.select('shoppingList');
  }

  public onEditItem(index: number): void {
    this.store.dispatch(new StartEdit(index));
  }

  ngOnDestroy() { }
}
