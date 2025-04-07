import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./components/Header";
// import PostForm from "./components/PostForm";
// import PostItem from "./components/PostItem";
// import PostList from "./components/PostList";
import { useState } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import AdditionalHeader from "./components/AdditionalHeader";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import { Routes } from "react-router-dom";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  function onTitleChange(e) {
    setTitleValue(e.target.value);
  }

  function onContentChange(e) {
    setContentValue(e.target.value);
  }

  return (
    <>
      <div>
        <Routes>
          <Routes path="/" element={<Home />} />
          <Routes path="/about" element={<About />} />
          <Routes path="/shop" element={<Shop />} />
          <Routes path="/contacts" element={<Contacts />} />
          <Routes path="/profile/:userId" element={<Profile />} />
        </Routes>
      </div>

      {/* <Header />
      <PostForm
        titleValue={titleValue}
        contentValue={contentValue}
        onTitleChange={onTitleChange}
        onContentChange={onContentChange}
      />
      <PostItem />
      <PostList /> */}
    </>
  );
}

export default App;
