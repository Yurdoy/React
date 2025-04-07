import userIcon from "../assets/userIcon.svg";

function PostItem(props) {
  const { title, id, content } = props;
  return (
    <>
      <div className="postItemDiv">
        <div className="postItemLogoPart">
          <img src={userIcon}></img>
          <h5>User logo</h5>
        </div>
        <div>
          <h3>{title}</h3>
          <h4>{content}</h4>
        </div>
        <div>
          <h5>{id}</h5>
          <button>Удалить</button>
        </div>
      </div>
    </>
  );
}

export default PostItem;
