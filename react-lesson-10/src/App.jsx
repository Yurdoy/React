import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
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
    fetchPost();
  }, []);

  function onTitleChange(e) {
    setTitleValue(e.target.value);
  }

  function onContentChange(e) {
    setContentValue(e.target.value);
  }

  function publish(e) {
    e.preventDefault();
    console.log(titleValue, contentValue);
  }

  return (
    <>
      <Header />
      <main>
        <PostList posts={posts} />
        <PostForm
          titleValue={titleValue}
          contentValue={contentValue}
          onTitleChange={onTitleChange}
          onContentChange={onContentChange}
          publish={publish}
        />
      </main>
    </>
  );
}

export default App;
