function Post() {
  const { id, title, description } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{id}</strong>
    </div>
  );
}
export default Post;
