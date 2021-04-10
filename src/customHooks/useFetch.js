import { useState, useEffect } from "react";

// Custom Hook for API data fetching and any custom hook function must start with "use" followed by any name
const useFetch = (url) => {
  // Blogs Array
  const [data, setData] = useState();
  // Loading Message Operation
  const [isLoading, setIsLoading] = useState(true);
  // Setting up Error Message
  const [errorMessage, setErrorMessage] = useState(null);
  // Fetching Blogs from db.json API [server done through json-server]

  useEffect(() => {
    // Abort controller for cancelling subscription in useEffect Clean up
    const abrtCtrl = new AbortController();
    // Fetching using promise then
    fetch(url, { signal: abrtCtrl.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not load or find the API End-Point");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setErrorMessage(null);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Abort Error");
        } else {
          setErrorMessage(error.message);
          setIsLoading(false);
        }
      });

    // Fetching API using async await
    // const fetchBlogAPI = async () => {
    //   const blogResult = await fetch("http://localhost:8000/blogs");
    //   const data = await blogResult.json();
    //   console.log(data);
    // };
    // fetchBlogAPI();

    // Clean Up function
    return () => {
      abrtCtrl.abort();
    };
  }, [url]);

  return { data, isLoading, errorMessage };
};

export default useFetch;
