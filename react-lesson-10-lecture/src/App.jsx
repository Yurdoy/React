import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./App.module.css";
import { useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://683ef3211cd60dca33ddb0f3.mockapi.io/posts"
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <Header />
        <main className={styles.main}>
          <PostList />
          <PostForm />
        </main>
      </div>
    </>
  );
}

export default App;
