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

  const onTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const onContentChange = (e) => {
    setContentValue(e.target.value);
  };

  const fetchPosts = async () => {
    try {
      const response = await axios.post(
        "https://67d8614700348dd3e2a74a1c.mockapi.io/api/mach-17/mock-data-17",
        {
          title: titleValue,
          content: contentValue,
          },
      );
      console.log(response.data)
      setPosts([...posts, response.data])
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  const publish = (e) => {
    fetchPosts();
    e.preventDefault();
    console.log(titleValue, contentValue);
  };

  const deleteItem = (itemToDelete) => {
    
    return posts.filter(item => item.id != itemToDelete)
  }
  console.log(posts)

  return (
    <>
      <Header />
      <main>
        <section>
          <PostList posts={posts} deleteItem={deleteItem} />
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
