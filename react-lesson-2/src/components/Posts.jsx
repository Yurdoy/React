function Posts(props) {
  const { title, description, price } = props;
  return (
    <div>
      <h3>Post</h3>
      <p>{title}</p>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
}

export default Posts;
