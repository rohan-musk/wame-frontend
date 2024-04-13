import { AUTH_ACTION_TYPES } from './auth.types';

const INITIAL_STATE = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  username: null,
};

export const authReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
        username: payload.username,
      };
    case AUTH_ACTION_TYPES.REFRESH_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        accessToken: null,
        refreshToken: null,
      };
    default:
      return state;
  }
};
