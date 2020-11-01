import { AuthLoginEffect } from './Effects/AuthLogin.Effect';
import { AuthLogoutEffect } from './Effects/AuthLogout.Effect';
import { AuthRedirectEffect } from './Effects/AuthRedirect.Effect';
import { AuthSignupEffect } from './Effects/AuthSignup.Effect';
import { AutoLoginEffect } from './Effects/AutoLogin.Effect';

export const authEffects = [
  AuthLoginEffect,
  AuthRedirectEffect,
  AuthSignupEffect,
  AuthLogoutEffect,
  AutoLoginEffect
];
