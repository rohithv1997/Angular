import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
import { User } from 'src/models/user.model';
import { UserRedirection } from 'src/models/UserRedirection.Model';
import { AuthenticationService } from 'src/services/authentication.service';
import { LocalStorageService } from 'src/services/localstorage.service';
import { Login } from '../Actions/Login';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AutoLoginEffect {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private authService: AuthenticationService
  ) {}

  @Effect()
  public AutoLogin = this.actions$.pipe(
    ofType(AuthenticationActionNames.AUTO_LOGIN),
    map(() => {
      const userData: {
        email: string;
        id: string;
        token: string;
        tokenExpirationDate: string;
      } = this.localStorageService.getUser();
      if (userData) {
        const loadedUser = new User(
          userData.email,
          userData.id,
          userData.token,
          new Date(userData.tokenExpirationDate)
        );
        if (loadedUser.Token) {
          const expirationDuration =
            new Date(userData.tokenExpirationDate).getTime() -
            new Date().getTime();
          this.authService.setLogoutTimer(expirationDuration);
          return new Login(new UserRedirection(loadedUser, true));
        }
      }
    }),
    filter(Boolean)
  );
}
