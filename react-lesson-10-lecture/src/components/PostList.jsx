import React from "react";
import Post from "./Post";
import styles from "../styles/PostList.module.css";

const PostList = ({ posts, onDelete }) => {
  if (!posts.length) {
    return <p>No posts available</p>;
  }

  return (
    <div className={styles.postList_main}>
      <h2 className={styles.postList_header}>Post List</h2>
      {posts.map(({ id, title, text }) => (
        <Post
          key={id}
          title={title}
          body={text}
          onDelete={() => onDelete(id)}
          id={id}
        />
      ))}
    </div>
  );
};

export default PostList;
