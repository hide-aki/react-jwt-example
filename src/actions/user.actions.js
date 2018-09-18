import { userConstants } from '../constants';
import { userService } from '../services';

export const getMe = () => {
    return dispatch => {
        dispatch(request());

        userService.getMe()
            .then(
                user => dispatch(getMeSuccess(user)),
                error => dispatch(getMeFailure(error))
            );
    };
}

const getMeRequest = () => ({
  type: userConstants.GET_ME_REQUEST
});
const getMeSuccess = (user) => ({
  type: userConstants.GET_ME_SUCCESS,
  user
});
const getMeFailure = (error) => ({
  type: userConstants.GET_ME_FAILURE,
  error
});
