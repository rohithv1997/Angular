import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Constants } from 'src/helpers/constants';
import { IAuthResponseData } from 'src/models/IAuthResponseData';
import { LoginInfo } from 'src/models/logininfo.model';
import { User } from 'src/models/user.model';
import { UserRedirection } from 'src/models/UserRedirection.Model';
import { Login } from 'src/store/Authentication/Actions/Login';
import { LoginFail } from 'src/store/Authentication/Actions/LoginFail';
import { Logout } from 'src/store/Authentication/Actions/Logout';
import * as fromApp from '../store/IAppState';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenExpirationTimer: any;
  constructor(
    private store: Store<fromApp.IAppState>,
    private httpClient: HttpClient
  ) {}

  public setLogoutTimer(expirationDurationInMilliSeconds: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new Logout());
    }, expirationDurationInMilliSeconds);
  }

  public clearLogoutTimer(): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  public sendRequest(
    authData: LoginInfo,
    postUrl: string
  ): Observable<IAuthResponseData> {
    return this.httpClient.post<IAuthResponseData>(postUrl, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    });
  }

  public handleErrorResponse(
    errorResponse: HttpErrorResponse
  ): Observable<LoginFail> {
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

  public createLogin(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ): Login {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    return new Login(new UserRedirection(user, true));
  }

}
