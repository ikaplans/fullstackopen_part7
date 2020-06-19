export const setNotification = (notification, timeout, isError) => {
  return function (dispatch, getState) {
    const state = getState();
    if (state.notification && state.notification.timeoutId) {
      clearTimeout(state.notification.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, timeout * 1000);
    dispatch({
      type: 'SET_NOTIFICATION',
      notification: { content: notification, timeoutId, isError },
    });
  };
};

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  };
};
