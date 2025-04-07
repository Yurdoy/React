import { useEffect } from "react";
import PostItem from "./PostItem";
import axios from "axios";

function PostList(props) {
  const { posts } = props;
  return (
    <>
      <div className="postListDiv">
        <h2 className="postListText">Список постов</h2>
        <div>
          {posts.map((item) => {
            <PostItem title={item.title} content={item.content} id={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default PostList;
