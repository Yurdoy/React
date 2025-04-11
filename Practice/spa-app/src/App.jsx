import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Routes, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, { ...post, id: Date.now() }]);
  };

  const deletePost = (id) => {
    (prevPosts) => prevPosts.filter((post) => post.id !== id);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} deletePost={deletePost} />}
        />
        <Route path="/create" element={<CreatePost addPost={addPost} />} />
        <Route path="/posts/:id" element={<PostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
