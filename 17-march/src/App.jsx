import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://67d8614700348dd3e2a74a1c.mockapi.io/api/mach-17/mock-data-17"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    fetchPosts();
  }, []);

  const onTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const onContentChange = (e) => {
    setContentValue(e.target.value);
  };

  const publish = (e) => {
    e.preventDefault();
    console.log(titleValue, contentValue);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <PostList posts={posts} />
          <PostForm
            titleValue={titleValue}
            contentValue={contentValue}
            onTitleChange={onTitleChange}
            onContentChange={onContentChange}
            publish={publish}
          />
        </section>
      </main>
    </>
  );
}

export default App;
