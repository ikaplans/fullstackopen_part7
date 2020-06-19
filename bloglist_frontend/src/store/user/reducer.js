const defaultState = {
  currentUser: null,
  all: [],
};

const userReducer = (state = defaultState, action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.data };
    case 'SET_USERS':
      return { ...state, all: action.data };
    default:
      return state;
  }
};

export default userReducer;
