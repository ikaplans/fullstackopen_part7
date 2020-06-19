import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { initBlogs } from '../store/blog/actions';
import { deleteBlog, updateBlog } from '../store/blog/actions';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const BlogDetails = ({ blogId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );
  if (!blog) {
    history.push('/');
  }
  const currentUserName = useSelector(
    (state) => state.users.currentUser.userName
  );

  const onBlogDeleted = () => {
    if (!window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      return;
    }
    dispatch(deleteBlog(blog));
    history.push('/');
  };

  const onBlogLiked = () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    if (blog.user) {
      updatedBlog.user = blog.user.id;
    }
    dispatch(updateBlog(updatedBlog));
  };

  const canRemove = () => {
    return (
      blog && (blog.user || false) && blog.user.userName === currentUserName
    );
  };

  useEffect(() => {
    dispatch(initBlogs());
  }, [dispatch]);

  return !blog ? null : (
    <Card>
      <Card.Header>
        <h2>{blog.title}</h2>
      </Card.Header>
      <Card.Body>
        <div className="details">
          <div className="url">
            <a href={blog.url}>{blog.url}</a>
          </div>
          <div className="likes">
            likes {blog.likes}
            <Button
              size="sm"
              variant="success"
              style={{
                marginLeft: '10px',
                fontSize: '10px',
                padding: '0px 5px',
              }}
              className={'likeButton'}
              onClick={() => onBlogLiked()}
            >
              like
            </Button>
          </div>
          {blog.user ? (
            <div className="userName">added by {blog.user.name}</div>
          ) : null}
          {canRemove() ? (
            <Button
              variant="danger"
              className={'removeButton'}
              style={{ fontSize: '10px', padding: '0px 5px' }}
              onClick={() => onBlogDeleted()}
            >
              remove
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
    // <div>
    //   <h2>{blog.title}</h2>
    //   <div className="details">
    //     <div className="url">
    //       <a href={blog.url}>{blog.url}</a>
    //     </div>
    //     <div className="likes">
    //       likes {blog.likes}
    //       <button className={'likeButton'} onClick={() => onBlogLiked()}>
    //         like
    //       </button>
    //     </div>
    //     {blog.user ? (
    //       <div className="userName">added by {blog.user.name}</div>
    //     ) : null}
    //     {canRemove() ? (
    //       <button className={'removeButton'} onClick={() => onBlogDeleted()}>
    //         remove
    //       </button>
    //     ) : null}
    //   </div>
    //   <h3>comments</h3>
    // </div>
  );
};

BlogDetails.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default BlogDetails;
