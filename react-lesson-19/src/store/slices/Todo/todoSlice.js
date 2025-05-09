import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "../../services/fetchTodoList";

const initialState = {
  status: "default status",
  data: [],
  error: null,
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(state.payload);
    },
    deleteTodo: (state, action) => {
      state.todo.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
      });
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export const allData = (state) => state.todo.data;
export const allTodos = (state) => state.todo;
export default todoSlice.reducer;
