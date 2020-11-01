import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/services/authentication.service';
import { LocalStorageService } from 'src/services/localstorage.service';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AuthLogoutEffect {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  @Effect({
    dispatch: false,
  })
  public AuthLogout = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      this.localStorageService.removeUser();
      this.router.navigateByUrl('/auth');
    })
  );
}
