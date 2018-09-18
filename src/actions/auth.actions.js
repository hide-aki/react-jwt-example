import { authConstants } from '../constants';
import { userService } from '../services';
import { push } from 'react-router-redux';

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest({ username }));

        userService.login(username, password)
          .then(
              user => {
                  dispatch(loginSuccess(user));
                  dispatch(push('/dashboard'));
              },
              error => {
                  dispatch(loginFailure(error));
              }
          );
    };

}

export const logoutAndRedirect = () => {
  return dispatch => {
    userService.logout();
    dispatch(logout());
    dispatch(push('/login'));
  }
}

const logout = () => ({
  type: authConstants.LOGOUT
});


const loginRequest = user => ({
  type: authConstants.LOGIN_REQUEST,
  payload: user
});


const loginSuccess = user => ({
  type: authConstants.LOGIN_SUCCESS,
  payload: user
});
const loginFailure = error => ({
  type: authConstants.LOGIN_FAILURE,
  payload: error
});
