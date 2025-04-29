import { useState } from "react";
import "./App.css";
import ExpensiveComputationComponents from "./components/ExpansiveComputationComponents";

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
  const [value, setValue] = useState({ titleValue: "", contentValue: "" });
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

    setValue({
      ...value,
      [name]: value,
    });
  };
  const onHandleClick = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <div>
        <ExpensiveComputationComponents />
        <h3>Postlist</h3>
        {postList.map((item) => (
          <div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <form action="#" onSubmit={onHandleClick}>
        <input
          type="text"
          onChange={onHandleChange}
          value={value.titleValue}
          name="titleValue"
        />
        <input
          type="text"
          onChange={onHandleChange}
          value={value.contentValue}
          name="contentValue"
        />
        <button>Create to-do</button>
      </form>
    </>
  );
}

export default App;
