import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {exhaustMap, map, take} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/IAppState';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService, private store: Store<fromApp.IAppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('authentication').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        } else {
          const modifiedRequest = req.clone({params: new HttpParams().set('auth', user.Token)});
          return next.handle(modifiedRequest);
        }
      })
    );
  }

}
