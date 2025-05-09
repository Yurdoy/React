import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
});
