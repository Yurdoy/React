import React from "react";

const Post = ({ title, body, onDelete }) => {
  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <p>{body}</p>
      <button onClick={onDelete} title="Delete Post">
        Delete
      </button>
    </article>
  );
};

export default Post;

// Выделяет логику отображения отдельного поста в списке. В нем могут быть
// кнопки действий (например, удаление, редактирование).
