import React, { useEffect } from 'react';
import BlogList from './components/BlogList';
import UserList from './components/UserList';
import UserInfo from './components/UserInfo';
import UserDetails from './components/UserDetails';
import BlogDetails from './components/BlogDetails';
import Notification from './components/Notification';
import LoginForm from './components/LoginForm';
import Togglable from './components/Togglable';
import NewBlogForm from './components/NewBlogForm';
import { useDispatch, useSelector } from 'react-redux';
import { initBlogs } from './store/blog/actions';
import { initCurrentUser } from './store/user/actions';
import { Navbar, Nav, Card } from 'react-bootstrap';

import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './App.css';

const App = () => {
  const noteFormRef = React.createRef();
  const dispatch = useDispatch();
  const userIdMatch = useRouteMatch('/users/:id');
  const blogIdMatch = useRouteMatch('/blogs/:id');
  const selectedUserId = userIdMatch ? userIdMatch.params.id : null;
  const selectedBlogId = blogIdMatch ? blogIdMatch.params.id : null;
  const user = useSelector((state) => {
    return state.users.currentUser;
  });

  const Menu = () => {
    const padding = {
      paddingRight: 5,
    };
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          display: 'flex',
          background: 'lightGrey',
        }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav classname="mr-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">
                blogs
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">
                users
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div id="userInfoPanel">
          <UserInfo />
        </div>
      </Navbar>
    );
  };

  useEffect(() => {
    dispatch(initCurrentUser());
    dispatch(initBlogs());
  }, [dispatch]);

  return !user ? (
    <div className="container">
      <Notification />
      <LoginForm />
    </div>
  ) : (
    <div className="container">
      {Menu()}
      <Card>
        <Card.Header>
          <h1>blog app</h1>
          <Notification />
        </Card.Header>
        <Card.Body>
          <Switch>
            <Route path="/users/:id">
              <UserDetails userId={selectedUserId} />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails blogId={selectedBlogId} />
            </Route>
            <Route path="/">
              <div id="createNewBlogContainer">
                <Togglable
                  buttonOpenLabel="create new blog"
                  buttonCloseLabel="cancel"
                  ref={noteFormRef}
                >
                  <NewBlogForm noteFormRef={noteFormRef} />
                </Togglable>
              </div>
              <br />
              <BlogList />
            </Route>
          </Switch>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
