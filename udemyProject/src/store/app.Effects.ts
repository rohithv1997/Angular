import { AuthLoginEffect } from './Authentication/Effects/AuthLogin.Effect';
import { AuthLogoutEffect } from './Authentication/Effects/AuthLogout.Effect';
import { AuthRedirectEffect } from './Authentication/Effects/AuthRedirect.Effect';
import { AuthSignupEffect } from './Authentication/Effects/AuthSignup.Effect';
import { AutoLoginEffect } from './Authentication/Effects/AutoLogin.Effect';

export const appEffect = [
  AuthLoginEffect,
  AuthRedirectEffect,
  AuthSignupEffect,
  AuthLogoutEffect,
  AutoLoginEffect
];
