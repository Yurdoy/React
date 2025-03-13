import { articleConfig } from "../articleConfig";
import Article from "./Article";

function Articles() {
  return (
    <div>
      {articleConfig.map((article) => (
        <Article
          key={article.index}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default Articles;
