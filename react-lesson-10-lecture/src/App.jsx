import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://683ef3211cd60dca33ddb0f3.mockapi.io/posts"
        );
        setPosts(res.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(
        `https://683ef3211cd60dca33ddb0f3.mockapi.io/posts/${id}`
      );
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      setError("Failed to delete post");
    }
  };

  return (
    <>
      <div>
        <Header />
        <main>
          {loading && <p>Loading posts...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (
            <PostList posts={posts} onDelete={deletePost} />
          )}
          <PostForm onAdd={addPost} />
        </main>
      </div>
    </>
  );
}

export default App;
