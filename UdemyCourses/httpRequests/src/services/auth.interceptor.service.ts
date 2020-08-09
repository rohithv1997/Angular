import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request intercepted');
    const modifiedRequest = req.clone(
      {
        headers: req.headers.append('Auth', 'xyz')
      });
    console.log(req.urlWithParams);
    console.log(req.headers);
    return next.handle(modifiedRequest);
  }
}
