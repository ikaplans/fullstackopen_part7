import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  const blogStyle = {
    paddingLeft: 2,
  };
  return (
    <div style={blogStyle} id="blogRoot">
      <Link
        key={blog.id}
        to={`/blogs/${blog.id}`}
      >{`${blog.title} by ${blog.author}`}</Link>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
