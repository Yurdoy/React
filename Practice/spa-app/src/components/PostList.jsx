import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
