import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../environments/environment";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {IAuthResponseData} from "../models/IAuthResponseData";
import {catchError, tap} from "rxjs/operators";
import {Constants} from "../helpers/constants";
import {User} from "../models/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userSubject = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {
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
    this.router.navigateByUrl('/auth');
  }

  private sendRequest(email: string, password: string, postUrl: string): Observable<IAuthResponseData> {
    return this.httpClient.post<IAuthResponseData>(
      postUrl,
      {
        "email": email,
        "password": password,
        "returnSecureToken": true
      }
    ).pipe(
      catchError(this.handleErrorResponse),
      tap(responseData => {
        this.handleAuthentication(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
      })
    );
  }

  private handleErrorResponse(errorResponse: HttpErrorResponse): Observable<IAuthResponseData> {
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

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.userSubject.next(user);
  }
}
