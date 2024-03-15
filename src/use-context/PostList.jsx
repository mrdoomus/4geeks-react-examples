import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostContext";

function PostList() {
  // 1. Use the useContext hook to access the PostContext
  const { posts, fetchPosts, addPost } = useContext(PostContext);

  // 2. Define state for newPost and setNewPost function using the useState hook
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // 3. Use the useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // 4. Define handleChange function to update the newPost state when input changes
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // 5. Define handleSubmit function to add new post when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.body.trim()) return;
    addPost(newPost);
    setNewPost({ title: "", body: "" });
  };

  // 6. Render the PostList component
  return (
    <div>
      <h2>Posts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          placeholder="Enter post title"
        />
        <textarea
          name="body"
          value={newPost.body}
          onChange={handleChange}
          placeholder="Enter post body"
        ></textarea>
        <button type="submit">Add Post</button>
      </form>
      <ul>
        {/* 7. Map through the posts array and render each post */}
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
