import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "http://localhost:3000/users/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await axios.post(API_URL + "register", userData);
      return response.data;
    } catch (error) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue({ message });
    }
  }
);
