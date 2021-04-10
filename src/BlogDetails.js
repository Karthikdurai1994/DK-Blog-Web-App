import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./customHooks/useFetch";

const BlogDetails = () => {
  // Getting URL Parameters
  const { id } = useParams();
  // Custom Hook
  const { data: blog, isLoading, errorMessage } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  // Handling Error if data cannot be deleted
  const [isError, setIsError] = useState(false);
  // usehistory hook
  const history = useHistory();
  // Handle Blog Deletion
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could Not Delete Data");
        }
        setIsError(false);
        history.push("/");
      })
      .catch((err) => {
        setIsError(true);
      });
  };
  // UI
  return (
    <div className="blog-details">
      {errorMessage !== null && (
        <div className="error-message">{errorMessage}</div>
      )}
      {isLoading && <div>Loading ...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
      {isError && <h2>Cannot Able to delete data</h2>}
    </div>
  );
};

export default BlogDetails;
