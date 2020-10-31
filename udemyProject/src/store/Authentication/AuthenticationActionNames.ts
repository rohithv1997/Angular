export enum AuthenticationActionNames {
  None,
  LOGIN = '[Authentication]LOGIN',
  LOGOUT = '[Authentication]LOGOUT',
  LOGIN_START = '[Authentication]LOGIN_START',
  LOGIN_FAIL = '[Authentication]LOGIN_FAIL',
  SIGNUP_START = '[Authentication]SIGNUP_START',
  SIGNUP = '[Authentication]SIGNUP',
  CLEAR_ERROR = '[Authentication]CLEAR_ERROR',
  AUTO_LOGIN = '[Authentication]AUTO_LOGIN'
}
