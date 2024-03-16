import React, { createContext, useState, useCallback, useMemo } from "react";

//1. Create a new context for posts
export const PostContext = createContext({});

//3. PostProvider component to provide posts data and functions to manipulate posts
export const PostProvider = ({ children }) => {
  // State to store the posts
  const [posts, setPosts] = useState([]);

  //4. Function to fetch posts from the API
  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  //5. Function to add a new post
  const addPost = useCallback(
    async (newPost) => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
          }
        );
        const data = await response.json();
        setPosts([...posts, data]);
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
    [posts]
  );

  //6. Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      posts,
      fetchPosts,
      addPost,
    }),
    [posts, fetchPosts, addPost]
  );

  //7. Provide the context value to its children components
  return (
    <PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
  );
};
