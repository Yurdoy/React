function PostForm(props) {
  const { titleValue, contentValue, onTitleChange, onContentChange } = props;

  return (
    <>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={titleValue}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={contentValue} onChange={onContentChange} />
        </div>
        <button onClick={() => console.log(titleValue, contentValue)}>
          Create
        </button>
      </div>
    </>
  );
}

export default PostForm;
