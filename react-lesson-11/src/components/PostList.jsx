import PostForm from "./PostForm";

function PostList(props) {
  const { posts } = props;
  return (
    <>
      <div>
        <h2>POSTS</h2>
        <div>
          {posts.map((post, index) => {
            <PostForm
              title={post.title}
              description={post.description}
              index={post.index}
            />;
          })}
        </div>
      </div>
    </>
  );
}

export default PostList;
