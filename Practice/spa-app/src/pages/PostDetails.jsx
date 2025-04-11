import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h1>Post is not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
