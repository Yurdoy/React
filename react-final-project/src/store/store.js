import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { basketSlice } from "./slices/basketSlice.js";
import { categorySlice } from "./slices/categoriesSlice.js";
export const rootReducer = combineSlices(basketSlice, categorySlice);

export const store = configureStore({
  reducer: rootReducer,
});
