import PostItem from "./PostItem";

function PostList(props) {
  const { posts, deleteItem } = props;
  return (
    <>
      <div className="postListDiv">
        <h2 className="postListText">Список постов</h2>
        <div>
          {posts.map((item) => (
            <PostItem
              key={item.id}
              title={item.title}
              content={item.content}
              id={item.id}
              deleteItem={() => deleteItem(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PostList;
