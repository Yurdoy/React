function CustomBlock(props) {
  const {
    postAuthor,
    postAuthorAge,
    postDescription,
    postMainContent,
    postTitle,
  } = props;
  return (
    <div>
      <h2>{postAuthor}</h2>
      <strong>{postAuthorAge}</strong>
      <div>
        <h3>{postDescription}</h3>
        <strong>{postMainContent}</strong>
      </div>
      <div>{postTitle}</div>
    </div>
  );
}

export default CustomBlock;
