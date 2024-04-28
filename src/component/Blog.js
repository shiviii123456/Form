import React from "react";
import PropTypes from "prop-types";

const Blog = (props) => {
  const { blog, handleDelete } = props;

  return (
    <div>
      {blog.map((blog) => {
        return (
          <div key={blog.id}>
            <p>{blog.title}</p>
            <h1>{blog.author}</h1>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array,
};

Blog.defaultProps = {
  blog: [],
};

export default Blog;
