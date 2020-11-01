import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Login } from '../Actions/Login';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AuthRedirectEffect {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({
    dispatch: false,
  })
  public AuthRedirect: Observable<Login> = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGIN),
    tap((authSuccessAction: Login) => {
      if (authSuccessAction.payload.isRedirectEnabled) {
        this.router.navigateByUrl('/');
      }
    })
  );
}
