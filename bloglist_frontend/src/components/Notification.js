import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Notification = () => {
  const notification = useSelector((state) => {
    return state.notification;
  });
  if (!notification || !notification.content || !notification.content) {
    return null;
  }

  return (
    <div>
      <Alert variant={notification.isError ? 'danger' : 'success'}>
        {notification.content}
      </Alert>
    </div>
  );
};

export default Notification;
