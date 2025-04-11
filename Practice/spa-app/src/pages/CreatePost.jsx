import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      addPost({ title, body });
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Post</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default CreatePost;
