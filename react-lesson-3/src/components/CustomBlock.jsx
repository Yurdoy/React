function CustomBlock(props) {
  const {
    postTitle,
    postDescription,
    postAuthor,
    postAuthorAge,
    postMainContent,
  } = props;
  return (
    <div>
      <h2>{postTitle}</h2>
      <strong>{postDescription}</strong>
      <div>
        <h3>{postAuthor}</h3>
        <strong>{postAuthorAge}</strong>
      </div>
      <div>{postMainContent}</div>
    </div>
  );
}

export default CustomBlock;
