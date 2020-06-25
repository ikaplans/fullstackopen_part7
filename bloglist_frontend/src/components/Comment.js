import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { addComment } from '../store/blog/actions';
const Comment = ({ blogId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(blogId, comment));
  };
  return (
    <div id="comments">
      <h4 style={{ margin: '10px 0px 0px 0px' }}>comments</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div style={{ display: 'flex' }}>
            <Form.Control
              style={{
                width: '200px',
                height: '25px',
                margin: '10px 0px 0px 0px',
              }}
              id="comment"
              type="text"
              value={comment}
              name="Username"
              onChange={({ target }) => setComment(target.value)}
            />
            <Button
              type="submit"
              style={{
                height: '25px',
                margin: '10px 10px 0px 10px',
                padding: '0px 5px',
                fontSize: '10px',
              }}
            >
              add comment
            </Button>
          </div>
        </Form.Group>
      </Form>
      <ul style={{ paddingInlineStart: '20px' }}>
        {blog.comments.map((comment, idx) => {
          return <li key={idx}>{comment}</li>;
        })}
      </ul>
    </div>
  );
};

Comment.propTypes = {
  blogId: PropTypes.string.isRequired,
};

export default Comment;
