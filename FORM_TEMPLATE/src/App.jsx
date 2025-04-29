import { useState } from "react";
import "./App.css";

const postList = [
  {
    id: "1",
    title: "post 1",
    content: "content 1",
  },
  {
    id: "2",
    title: "post 2",
    content: "content 2",
  },
  {
    id: "3",
    title: "post 3",
    content: "content 3",
  },
];
function App() {
  const [formValue, setFormValue] = useState({
    titleValue: "",
    contentValue: "",
  });

  const [toDo, setToDo] = useState([]);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log([e.target]);

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const onHandleClick = (e) => {
    e.preventDefault();
    const { titleValue, contentValue } = formValue;
    setToDo([
      ...toDo,
      { id: Date.now(), title: titleValue, content: contentValue },
    ]);
    setFormValue({ titleValue: "", contentValue: "" });
    console.log(formValue);
  };
  const onHandleDelete = (itemId) => {
    const itemToDelete = toDo.filter((item) => item.id !== itemId);
    setToDo(itemToDelete);
  };

  return (
    <>
      <div>
        <h3>Postlist</h3>
        {toDo.map((item, index) => (
          <div key={index}>
            <h4>task :{item.title}</h4>
            <p>Task description :{item.content}</p>
            <button onClick={() => onHandleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <form action="#" onSubmit={onHandleClick}>
        <input
          type="text"
          onChange={onHandleChange}
          value={formValue.titleValue}
          name="titleValue"
        />
        <input
          type="text"
          onChange={onHandleChange}
          value={formValue.contentValue}
          name="contentValue"
        />
        <button>Create to-do</button>
      </form>
    </>
  );
}

export default App;
