import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationActionNames } from '../AuthenticationActionNames';

@Injectable()
export class AuthRedirectEffect {

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}

  @Effect({
    dispatch: false
  })
  public AuthRedirect$: Observable<never> = this.actions$.pipe(
    ofType(AuthenticationActionNames.LOGIN),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  );
}
