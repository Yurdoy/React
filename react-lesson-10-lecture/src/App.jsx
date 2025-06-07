import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://683ef3211cd60dca33ddb0f3.mockapi.io/posts"
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const updatePost = (updatePost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatePost.id ? updatePost : post))
    );
    setEditingPost(null);
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const editPost = (post) => {
    setEditingPost(post);
  };

  return (
    <>
      <div>
        <Header />
        <main className={styles.main}>
          <PostList posts={posts} onEdit={editPost} onDelete={deletePost} />
          <PostForm
            onAdd={addPost}
            onUpdate={updatePost}
            editingPost={editingPost}
            onCancel={() => setEditingPost(null)}
          />
        </main>
      </div>
    </>
  );
}

export default App;
