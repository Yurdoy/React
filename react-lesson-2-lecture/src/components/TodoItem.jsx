function TodoItem({ text, isCompleted }) {
  return (
    <div className="TodoItem">
      <h4>{isCompleted ? "Solved" : "Not Solved"}</h4>
      <p>{text}</p>
    </div>
  );

  TodoItem.defaultProps = {
    text: "New Task",
    isCompleted: false,
  };
}

export default TodoItem;
