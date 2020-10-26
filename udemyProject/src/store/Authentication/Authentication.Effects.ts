import { Actions, ofType } from '@ngrx/effects';
import { AuthenticationActionNames } from './AuthenticationActionNames';

export class AuthenticationEffects {
  authLogin = this.actions$
                .pipe(
                  ofType(AuthenticationActionNames.LOGIN_START)
                );

  constructor(private actions$: Actions) {}
}
