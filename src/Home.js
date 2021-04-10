import React from "react";
import BlogList from "./BlogList";
import useFetch from "./customHooks/useFetch";

const Home = () => {
  // Calling Custom Hook for API Data fetching
  const { data: blogs, errorMessage, isLoading } = useFetch(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="home">
      {errorMessage !== null && (
        <div className="error-message">{errorMessage}</div>
      )}
      {isLoading && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList>}
    </div>
  );
};

export default Home;
