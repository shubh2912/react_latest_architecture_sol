import actionTypes from '../Actions/actionTypes';

const initialState = {
    userResponse: []
}

export default (state, action) => {
    if (!state) {
        state = initialState;
    }

    switch (action.type) {
        case actionTypes.SET_USER_RESPONSE:
            {
                const { userResponse } = state;
                userResponse.push(action.userResponse);
                state = Object.assign({}, state, {
                    userResponse
                });
            }
            return state;

        default:
            return state;
    }
}