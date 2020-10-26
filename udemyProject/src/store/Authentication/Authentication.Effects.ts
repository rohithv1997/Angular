import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/helpers/constants';
import { IAuthResponseData } from 'src/models/IAuthResponseData';
import { User } from 'src/models/user.model';
import { Login } from './Actions/Login';
import { LoginFail } from './Actions/LoginFail';
import { LoginStart } from './Actions/LoginStart';
import { AuthenticationActionNames } from './AuthenticationActionNames';

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient, private router: Router) {}

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGIN_START),
    switchMap((authData: LoginStart) => {
      return this.httpClient
        .post<IAuthResponseData>(
          environment.firebaseEmailSignInAuthenticationUrl +
            environment.firebaseEmailAuthenticationApiKey,
          {
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true,
          }
        )
        .pipe(
          map((responseData) => {
            return this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
          }),
          catchError(error => {
            return this.handleErrorResponse(error);
          })
        );
    })
  );

  @Effect({
    dispatch: false
  })
  authSuccess = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGIN),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  );

  private handleErrorResponse(errorResponse: HttpErrorResponse): Observable<LoginFail> {
    let errorMessage = 'An unknown error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return of(new LoginFail(errorMessage));
    }
    switch (errorResponse.error.error.message) {
      case Constants.EMAIL_EXISTS:
        errorMessage = 'This email exists already';
        break;
      case Constants.EMAIL_NOT_FOUND:
        errorMessage = 'This email does not exist';
        break;
      case Constants.INVALID_PASSWORD:
        errorMessage = 'The password is invalid';
        break;
    }
    return of(new LoginFail(errorMessage));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number): Login {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    return new Login(user);
  }

}
