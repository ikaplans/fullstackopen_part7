import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBlog } from '../store/blog/actions';
import { Form, Button } from 'react-bootstrap';

const NewBlogForm = ({ noteFormRef }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const formControlStyle = {
    width: '200px',
    height: '25px',
  };

  const formLabelStyle = {
    marginBottom: '0px',
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (noteFormRef) {
      noteFormRef.current.toggleVisibility();
    }
    dispatch(addBlog({ title, author, url }));
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <div style={{ width: '200px' }}>
      <h2>create new</h2>
      <Form id="newBlogForm" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={formLabelStyle}> title:</Form.Label>
          <Form.Control
            style={formControlStyle}
            id="title"
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
          <Form.Label style={formLabelStyle}> author:</Form.Label>
          <Form.Control
            style={formControlStyle}
            id="author"
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
          <Form.Label style={formLabelStyle}> url:</Form.Label>
          <Form.Control
            style={formControlStyle}
            id="url"
            type="url"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
          <Button
            type="submit"
            id="submitButton"
            variant="primary"
            style={{ marginTop: '20px', padding: '0px 5px' }}
          >
            create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

NewBlogForm.propTypes = {
  noteFormRef: PropTypes.object,
};

export default NewBlogForm;
