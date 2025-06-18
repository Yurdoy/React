import React from "react";
import styles from "../styles/Post.module.css";
import userLogo from "../assets/user-logo.svg";

const Post = ({ title, body, id, onDelete }) => {
  return (
    <article className={styles.article}>
      <div className={styles.posts}>
        <div className={styles.userLogo}>
          <img src={userLogo} alt="User Logo" />
          <p>User logo</p>
        </div>
        <div className={styles.postBody}>
          <header>
            <h2>{title}</h2>
          </header>
          <p>{body}</p>
        </div>
        <p>{id}</p>
        <button onClick={onDelete} title="Delete Post">
          Delete
        </button>
      </div>
    </article>
  );
};

export default Post;

// Выделяет логику отображения отдельного поста в списке. В нем могут быть
// кнопки действий (например, удаление, редактирование).
