import React, { useState, useImperativeHandle } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Togglable = React.forwardRef((props, ref) => {
  Togglable.displayName = 'Togglable';
  const buttonPosition = ['top', 'bottom', 'header'].includes(
    props.buttonPosition
  )
    ? props.buttonPosition
    : 'bottom';
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const getButton = () => {
    return (
      <Button
        style={{ padding: '0px 5px' }}
        onClick={toggleVisibility}
        className={'toggleVisibilityButton'}
      >
        {visible ? props.buttonCloseLabel : props.buttonOpenLabel}
      </Button>
    );
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <div id="togglableRoot">
      {props.header ? (
        <div>
          {props.header} {buttonPosition === 'header' ? getButton() : null}
        </div>
      ) : null}
      {!visible && buttonPosition !== 'header' ? (
        <div>{getButton()}</div>
      ) : null}
      {visible ? (
        <div>
          {buttonPosition === 'top' ? getButton() : null}
          {props.children}
          {buttonPosition === 'bottom' ? getButton() : null}
        </div>
      ) : null}
    </div>
  );
});

Togglable.propTypes = {
  children: PropTypes.object,
  header: PropTypes.string,
  buttonCloseLabel: PropTypes.string,
  buttonOpenLabel: PropTypes.string,
  buttonPosition: PropTypes.string,
};

export default Togglable;
