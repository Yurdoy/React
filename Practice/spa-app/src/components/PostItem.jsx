import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post, deletePost }) => {
  return (
    <div>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default PostItem;
