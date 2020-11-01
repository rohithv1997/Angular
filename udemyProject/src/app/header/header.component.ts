import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/datastorage.service';
import {Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IAppState';
import {map} from 'rxjs/operators';
import { Logout } from 'src/store/Authentication/Actions/Logout';
import { FetchRecipes } from 'src/store/Recipes/Actions/FetchRecipes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSubscription: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private store: Store<fromApp.IAppState>) {
  }

  ngOnInit(): void {
    this.userSubscription = this.store.select('authentication')
    .pipe(map(authState => authState.user))
    .subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  public onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData(): void {
    this.store.dispatch(new FetchRecipes());
  }

  public onLogout(): void{
    this.store.dispatch(new Logout());
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
