function Article({ title, content }) {
  return (
    <div>
      <ul>
        <li>{title}</li>
        <p>{content}</p>
      </ul>
    </div>
  );
}
console.log(Article);
export default Article;
