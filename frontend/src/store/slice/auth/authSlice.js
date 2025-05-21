import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../services/auth/authRegisterUser.js";
import {loginUser} from "../../services/auth/authLoginUser.js";


const initialState = {
    user: null,
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
    }
})


export default authSlice.reducer
