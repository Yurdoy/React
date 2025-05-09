import "./App.css";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./store/services/fetchTodoList";
import { allData } from "./store/slices/Todo/todoSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const data = useSelector(allData);
  console.log(data);

  return (
    <div>
      <Todo />
      {data.length > 0 &&
        data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default App;
