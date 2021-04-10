import React, { useRef, useState } from "react";

const CreateBlog = () => {
  // Handling Blog Title Value
  const [blogTitleValue, setBlogTitleValue] = useState("");
  // Handling Blog Body Value
  const [blogBodyValue, setBlogBodyValue] = useState("");
  // Handling Blog Author Value
  const [blogAuthorValue, setBlogAuthorValue] = useState("Karthik");
  // Loading Message
  const [isLoading, setIsLoading] = useState(false);
  // Reference for Inputs
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();

  // Handling Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newBlog = {
      title: blogTitleValue,
      body: blogBodyValue,
      author: blogAuthorValue,
    };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        titleRef.current.value = "";
        bodyRef.current.value = "";
        authorRef.current.value = "Karthik";
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  // UI
  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={blogTitleValue}
          ref={titleRef}
          onChange={(e) => {
            setBlogTitleValue(e.target.value);
          }}
        />
        <label>Blog Body:</label>
        <textarea
          value={blogBodyValue}
          ref={bodyRef}
          onChange={(e) => {
            setBlogBodyValue(e.target.value);
          }}
        />
        <label>Blog Author:</label>
        <select
          value={blogAuthorValue}
          ref={authorRef}
          onChange={(e) => {
            setBlogAuthorValue(e.target.value);
          }}
        >
          <option value="Karthik">Karthik</option>
          <option value="Durai">Durai</option>
        </select>
        {!isLoading && <button type="submit">Add Blog</button>}
        {isLoading && (
          <button disabled type="submit">
            Adding Blog
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
