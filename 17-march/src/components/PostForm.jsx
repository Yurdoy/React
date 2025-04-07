import { useState } from "react";

function PostForm(props) {
  const { titleValue, contentValue, onTitleChange, onContentChange, publish } =
    props;
  return (
    <>
      <form action="#">
        <div>
          <label>Заголовок</label>
          <input
            value={titleValue}
            onChange={onTitleChange}
            type="text"
            placeholder="Заголовок"
          />
        </div>
        <div>
          <label>Текст поста</label>
          <input
            value={contentValue}
            onChange={onContentChange}
            type="text"
            placeholder="Введите текст"
          />
        </div>
        <button onClick={publish}>Публикация</button>
      </form>
    </>
  );
}

export default PostForm;
