import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Components from "./components/Components";
import ColorChangeComponent from "./components/ColorChangeComponent";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    console.log("side effect");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);
  console.log(post);

  return (
    <>
      {post && post.map((item, index) => <div key={index}>{item.title}</div>)}
      {/* <Components />
      <ColorChangeComponent /> */}
    </>
  );
}

export default App;
