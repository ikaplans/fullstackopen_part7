import React from 'react';

const Notification = (props) => {
  const notification = props.notification;
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return notification ? <div style={style}>{notification.content}</div> : null;
};

export default Notification;
