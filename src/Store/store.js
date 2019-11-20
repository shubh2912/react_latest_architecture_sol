import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import userReducer from '../Reducers/reducer';

const reducers = combineReducers({
    userStore: userReducer
})

let store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
