import loginService from '../../services/login';
import blogService from '../../services/blogs';
import userService from '../../services/users';

import { setNotification } from '../notification/actions';

export const initUsers = () => {
  return async (dispatch) => {
    return dispatch({
      type: 'SET_USERS',
      data: await userService.getAllAsync(),
    });
  };
};

export const initCurrentUser = () => {
  return (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      return dispatch({
        type: 'SET_CURRENT_USER',
        data: user,
      });
    }
    return dispatch({
      type: 'SET_CURRENT_USER',
      data: null,
    });
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(username, password);
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));
      blogService.setToken(user.token);
      return dispatch({
        type: 'SET_CURRENT_USER',
        data: user,
      });
    } catch (exception) {
      dispatch(setNotification(`Wrong credentials`, 5, true));
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    window.localStorage.removeItem('loggedNoteappUser');
    return dispatch({
      type: 'SET_CURRENT_USER',
      data: null,
    });
  };
};
