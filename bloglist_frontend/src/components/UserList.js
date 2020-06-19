import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initUsers } from '../store/user/actions';
import { Link } from 'react-router-dom';
const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initUsers());
  }, [dispatch]);
  const users = useSelector((state) => {
    return state.users.all;
  });

  const row = { display: 'flex' };
  const firstColumn = {
    width: '10%',
  };

  const secondColumn = {
    width: '50%',
  };

  return (
    <div id="userList">
      <h2>Users</h2>
      <div style={row}>
        <div style={firstColumn} />
        <div style={secondColumn}>
          <b>blogs created</b>
        </div>
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <div style={row}>
            <div style={firstColumn}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
            <div style={secondColumn}>{user.blogs.length}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserList;
