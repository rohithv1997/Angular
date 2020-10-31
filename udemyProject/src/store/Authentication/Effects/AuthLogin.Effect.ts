import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginInfo } from 'src/models/logininfo.model';
import { AuthenticationService } from 'src/services/authentication.service';
import { LocalStorageService } from 'src/services/localstorage.service';
import { Login } from '../Actions/Login';
import { LoginFail } from '../Actions/LoginFail';
import { LoginStart } from '../Actions/LoginStart';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AuthLoginEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {}

  @Effect()
  public AuthLogin$: Observable<Login | LoginFail> = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGIN_START),
    switchMap((authData: LoginStart) => {
      return this.authService
        .sendRequest(
          new LoginInfo(authData.payload.email, authData.payload.password),
          environment.firebaseEmailSignInAuthenticationUrl +
            environment.firebaseEmailAuthenticationApiKey
        )
        .pipe(
          tap((responseData) => {
            this.authService.setLogoutTimer(+responseData.expiresIn * 1000);
          }),
          map((responseData) => {
            const login = this.authService.createLogin(
              responseData.email,
              responseData.localId,
              responseData.idToken,
              +responseData.expiresIn
            );
            this.localStorageService.setUser(login.payload);
            return login;
          }),
          catchError((error) => {
            return this.authService.handleErrorResponse(error);
          })
        );
    })
  );
}
