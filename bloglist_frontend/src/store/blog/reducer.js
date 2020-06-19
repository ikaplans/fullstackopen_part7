const blogReducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'ADD':
      return state.concat(action.data);
    case 'DELETE':
      return state.filter((blog) => blog.id !== action.data.id);
    case 'UPDATE':
      return state.map((b) => {
        return b.id === action.data.id ? action.data : b;
      });
    default:
      return state;
  }
};

export default blogReducer;
