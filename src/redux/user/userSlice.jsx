import { createSlice } from "@reduxjs/toolkit";
import { userSignin } from "./userReducer";
import userInitialState from "./initialState";

const initialState = {
    status: "idle",
    error: null,
    authenticated: false,
    user: userInitialState
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(userSignin.pending, (state) => state.status = "loading")
            .addCase(userSignin.rejected, (state, action)=> {state.status = "idle"; state.error = action.error})
            .addCase(userSignin.fulfilled, (state, action)=> {
                state.status = "idle"; 
                state.user = action.payload.data.user;
                localStorage.setItem("token", action.payload.data.token)
                state.authenticated = true
            })

            
    }
})

export default userSlice.reducer