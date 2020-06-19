import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import blogReducer from './blog/reducer';
import notificationReducer from './notification/reducer';
import userReducer from './user/reducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
