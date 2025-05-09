import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/slices/Todo/todoSlice";

const Todo = () => {
  const [stateValue, setStateValue] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateValue({ ...stateValue, [name]: value });
  };

  const createTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: stateValue.title,
      description: stateValue.description,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <input
        type="text"
        value={stateValue.title}
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={stateValue.description}
        name="description"
        onChange={handleChange}
      />
      <button onClick={createTodo}>Create</button>
      {todoList.map((item) => (
        <ul>
          <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Todo;
