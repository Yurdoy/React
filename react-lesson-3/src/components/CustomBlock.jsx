function CustomBlock(props) {
  const {
    postTitle,
    postDescription,
    postAuthor,
    postAuthorAge,
    postMainContent,
    textBtn,
  } = props;
  return (
    <div className="post">
      <h2 className="title">{postTitle}</h2>
      <strong className="description">{postDescription}</strong>
      <div>
        <h3 className="author">{postAuthor}</h3>
        <strong className="authorAge">{postAuthorAge}</strong>
      </div>
      <div className="mainContent">{postMainContent}</div>
      <button>{textBtn}</button>
    </div>
  );
}

export default CustomBlock;
