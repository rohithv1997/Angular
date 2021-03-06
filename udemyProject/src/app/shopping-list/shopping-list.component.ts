import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromShoppingList from '../../store/Shopping-List/IShoppingList.State';
import { StartEdit } from 'src/store/Shopping-List/Actions/StartEdit';
import * as fromApp from '../../store/IAppState';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // used in async pipe ngfor
  shoppingListDetails: Observable<fromShoppingList.IShoppingListState>;


  constructor(
    private store: Store<fromApp.IAppState>
  ) {}

  ngOnInit() {
    this.shoppingListDetails = this.store.select('shoppingList');
  }

  public onEditItem(index: number): void {
    this.store.dispatch(new StartEdit(index));
  }

  ngOnDestroy() {
   }
}
