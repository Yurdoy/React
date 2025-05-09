import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../slices/Todo/todoSlice";
// import { todoSlice } from "../slices/Todo/todoSlice";
export const rootReducer = combineSlices(
  todoSlice
  //тут дальше прокидываем слайсы в стор
);
export const store = configureStore({
  reducer: rootReducer,
});
