import React, { useState, useEffect, useCallback } from "react";
import Blog from "./Blog";
import useFetch from "./useFetch";

const Home = () => {
  const { blog } = useFetch();

  //   const handleDelete = (id) => {
  //     const filtetedData = blog.filter((blog) => blog.id != id);
  //     setBlog(filtetedData);
  //   };

  return (
    <div>
      <Blog blog={blog && blog.filter((blog) => blog.title === "Honorable")} />
      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
};

export default Home;
