import React from "react";

const Post = ({ title, body, onEdit, onDelete }) => {
  return (
    <div>
      <article>
        <header>
          <h2>{title}</h2>
          <div>
            <button onClick={onEdit} aria-label="Edit post" title="Edit">
              Edit
            </button>
            <button onClick={onDelete} aria-label="Delete post" title="Delete">
              Delete
            </button>
          </div>
        </header>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default Post;

// Выделяет логику отображения отдельного поста в списке. В нем могут быть
// кнопки действий (например, удаление, редактирование).
