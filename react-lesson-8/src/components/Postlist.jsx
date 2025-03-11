import Post from "./Post";
import { postConfig } from "../postConfig";

function Postlist() {
  return (
    <div>
      {postConfig.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}
export default Postlist;
