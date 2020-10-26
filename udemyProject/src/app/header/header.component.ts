import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/datastorage.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/IAppState';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSubscription: Subscription;
  constructor(
    private dataStorageService: DataStorageService,
    private authenticationService: AuthenticationService,
    private store: Store<fromApp.IAppState>) {
  }

  ngOnInit(): void {
    this.userSubscription = this.store.select('authentication')
    .pipe(map(authState => authState.user))
    .subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(user);
      console.log(!user);
      console.log(!!user);
    });
  }

  public onSaveData(): void {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  public onLogout(): void{
    this.authenticationService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
