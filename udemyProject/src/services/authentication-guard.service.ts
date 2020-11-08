import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IAppState';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router, private store: Store<fromApp.IAppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('authentication')
      .pipe(
        take(1),
        map(authState => {
          return authState.user;
        }),
        map(user => {
          const isAuth = !!user;
          if (isAuth) {
            return true;
          }
          return this.router.createUrlTree(['/auth']);
        })
      );
  }
}
