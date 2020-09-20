import {Component, OnDestroy, OnInit} from '@angular/core';
import {Constants} from 'src/helpers/constants';
import {DataStorageService} from '../../services/datastorage.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSubscription: Subscription;
  constructor(private dataStorageService: DataStorageService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.userSubject.subscribe(user => {
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
