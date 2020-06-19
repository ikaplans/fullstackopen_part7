import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user/actions';
import { Button } from 'react-bootstrap';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.users.currentUser;
  });
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div style={{ color: 'white' }}>
        {user.name + ' logged in'}{' '}
        <Button style={{ padding: '0px 5px' }} onClick={onLogout}>
          logout
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
