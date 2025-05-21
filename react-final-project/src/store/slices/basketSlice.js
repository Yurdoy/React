import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducer: {
    increaseValue: (state) => {
      state.value += 1;
    },
    addItemToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { increaseValue, addItemToBasket } = basketSlice.actions;

export default basketSlice.reducer;
