import { authConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ?
{
  loggingIn: false,
  loggedIn: true,
  user: user,
  error: false,
}
: {
  loggingIn: false,
  loggedIn: false,
  user: null,
  error: false,
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
        user: action.payload.user,
        error: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.payload.user,
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: false
      };
    default:
      return state
  }
}
