import React from "react";
import Post from "./Post";

const PostList = ({ posts, onDelete }) => {
  if (!posts.length) {
    return <p>No posts available</p>;
  }

  return (
    <main>
      {posts.map(({ id, title, text }) => (
        <Post
          key={id}
          title={title}
          body={text}
          onDelete={() => onDelete(id)}
        />
      ))}
    </main>
  );
};

export default PostList;

// В этом компоненте реализовано отображение списка всех постов. Сюда
// входит загрузка данных из API, их отображение и передача данных в компоненты
// постов.
