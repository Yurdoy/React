function PostForm(props) {
  const { titleValue, contentValue, onTitleChange, onContentChange, publish } =
    props;
  return (
    <>
      <form>
        <div>
          <label>Заголовок</label>
          <input
            type="text"
            placeholder="Загаловок"
            value={titleValue}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label>Текст поста</label>
          <input
            type="text"
            placeholder="Введите текст..."
            value={contentValue}
            onChange={onContentChange}
          />
          Текст поста
        </div>
        <button onClick={publish}>Публикация</button>
      </form>
    </>
  );
}

export default PostForm;
