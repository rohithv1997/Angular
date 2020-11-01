import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginInfo } from 'src/models/logininfo.model';
import { AuthenticationService } from 'src/services/authentication.service';
import { LocalStorageService } from 'src/services/localstorage.service';
import { Login } from '../Actions/Login';
import { LoginFail } from '../Actions/LoginFail';
import { SignupStart } from '../Actions/SignupStart';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AuthSignupEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {}

  @Effect()
  public AuthSignup: Observable<Login | LoginFail> = this.actions$.pipe(
    ofType(AuthenticationActionNames.SIGNUP_START),
    switchMap((authData: SignupStart) => {
      return this.authService
        .sendRequest(
          new LoginInfo(authData.payload.email, authData.payload.password),
          environment.firebaseEmailSignupAuthenticationUrl +
            environment.firebaseEmailAuthenticationApiKey
        )
        .pipe(
          map((responseData) => {
            const login = this.authService.createLogin(
              responseData.email,
              responseData.localId,
              responseData.idToken,
              +responseData.expiresIn
            );
            this.localStorageService.setUser(login.payload.user);
            return login;
          }),
          catchError((error) => {
            return this.authService.handleErrorResponse(error);
          })
        );
    })
  );
}
