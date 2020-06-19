import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { initUsers } from '../store/user/actions';
const UserDetails = ({ userId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initUsers());
  }, [dispatch]);
  const user = useSelector((state) => {
    return state.users.all.find((user) => user.id === userId);
  });
  return !user ? null : (
    <div>
      <h2> {user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

UserDetails.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserDetails;
