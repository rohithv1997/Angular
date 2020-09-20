import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../environments/environment';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {IAuthResponseData} from '../models/IAuthResponseData';
import {catchError, tap} from 'rxjs/operators';
import {Constants} from '../helpers/constants';
import {User} from '../models/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  userSubject = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  private static handleErrorResponse(errorResponse: HttpErrorResponse): Observable<IAuthResponseData> {
    let errorMessage = 'An unknown error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
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
    return throwError(errorMessage);
  }

  public signUp(email: string, password: string): Observable<IAuthResponseData> {
    return this.sendRequest(email, password,
      environment.firebaseEmailSignupAuthenticationUrl + environment.firebaseEmailAuthenticationApiKey);
  }

  public login(email: string, password: string): Observable<IAuthResponseData> {
    return this.sendRequest(email, password,
      environment.firebaseEmailSignInAuthenticationUrl + environment.firebaseEmailAuthenticationApiKey);
  }

  public logout() {
    this.userSubject.next(null);
    this.router.navigateByUrl('/auth').then(r => r);
    localStorage.removeItem(Constants.LocalStorageKey);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  public autoLogin(): void {
    const userData: {
      email: string;
      id: string;
      token: string;
      tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem(Constants.LocalStorageKey));
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData.token, new Date(userData.tokenExpirationDate));
    if (loadedUser.Token) {
      this.userSubject.next(loadedUser);
      const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  public autoLogout(expirationDuration: number): void {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private sendRequest(email: string, password: string, postUrl: string): Observable<IAuthResponseData> {
    return this.httpClient.post<IAuthResponseData>(
      postUrl,
      {
        email,
        password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(AuthenticationService.handleErrorResponse),
      tap(responseData => {
        this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
      })
    );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.userSubject.next(user);
    localStorage.setItem(Constants.LocalStorageKey, JSON.stringify(user));
    this.autoLogout(expiresIn * 1000);
  }
}
