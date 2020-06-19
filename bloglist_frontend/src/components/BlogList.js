import React from 'react';
import Blog from './Blog';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const BlogList = () => {
  const blogs = useSelector((state) => {
    return state.blogs.sort((b1, b2) => b2.likes - b1.likes);
  });

  return (
    <div id="blogList">
      <Table striped bordered size="sm">
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <Blog blog={blog} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BlogList;
