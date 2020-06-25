import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/actions';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };
  const formControlStyle = {
    width: '200px',
    height: '25px',
  };

  const formLabelStyle = {
    marginBottom: '0px',
  };
  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={formLabelStyle}> username:</Form.Label>
          <Form.Control
            style={formControlStyle}
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
          <Form.Label style={formLabelStyle}> password:</Form.Label>
          <Form.Control
            style={formControlStyle}
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
            login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LoginForm;
