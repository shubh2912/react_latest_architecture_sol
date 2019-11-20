import actionTypes from './actionTypes';

export const setUserData = userObj => {
    return {
        type: actionTypes.SET_USER_RESPONSE,
        userResponse: userObj
    }
}