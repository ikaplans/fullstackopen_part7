const notificationReducer = (state = null, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification;
    case 'CLEAR_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
