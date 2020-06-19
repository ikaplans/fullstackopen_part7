import blogService from '../../services/blogs';
import { setNotification } from '../notification/actions';
export const initBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAllAsync();
    return dispatch({
      type: 'INIT',
      data: blogs,
    });
  };
};

export const addBlog = (blog) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const newBlog = { ...blog, user: state.users.currentUser.id };
      const savedBlog = await blogService.createAsync(newBlog);
      dispatch(
        setNotification(
          `a blog ${savedBlog.title} by ${savedBlog.author} added`,
          5,
          false
        )
      );
      return dispatch({
        type: 'ADD',
        data: savedBlog,
      });
    } catch (exception) {
      setNotification(`Error while submitting a new blog`, 5, true);
    }
  };
};

export const deleteBlog = (blog) => {
  return async (dispatch) => {
    try {
      await blogService.deleteAsync(blog);
      dispatch(
        setNotification(
          `a blog ${blog.title} by ${blog.author} removed`,
          5,
          false
        )
      );
      return dispatch({
        type: 'DELETE',
        data: blog,
      });
    } catch (exception) {
      dispatch(setNotification('Error while removing a blog', 5, true));
    }
  };
};

export const updateBlog = (blog) => {
  return async (dispatch) => {
    try {
      const updatedBlog = await blogService.putAsync(blog);
      dispatch(
        setNotification(
          `a blog ${updatedBlog.title} by ${updatedBlog.author} updated`,
          5,
          false
        )
      );
      return dispatch({
        type: 'UPDATE',
        data: updatedBlog,
      });
    } catch (exception) {
      setNotification(`Error while updating a blog`, 5, true);
    }
  };
};
