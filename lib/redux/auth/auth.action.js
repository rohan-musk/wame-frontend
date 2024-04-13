import { AUTH_ACTION_TYPES } from './auth.types';

export const loginSuccess = (accessToken, refreshToken, username) => ({
  type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
  payload: { accessToken, refreshToken, username },
});

export const refreshAccessTokenSuccess = (accessToken) => ({
  type: AUTH_ACTION_TYPES.REFRESH_ACCESS_TOKEN_SUCCESS,
  payload: accessToken,
});

export const logout = () => ({
  type: AUTH_ACTION_TYPES.LOGOUT,
});
