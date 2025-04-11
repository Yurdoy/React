import React from "react";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";

const Home = ({ posts, deletePost }) => {
  return (
    <div>
      <h2>Mini Blog</h2>
      <Link to="/create">Create Post</Link>
      <PostList posts={posts} deletePost={deletePost} />
      {posts.length === 0 && <p>No Posts</p>}
    </div>
  );
};

export default Home;
