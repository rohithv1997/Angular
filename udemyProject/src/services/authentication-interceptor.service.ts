import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.userSubject.pipe(
      take(1),
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
