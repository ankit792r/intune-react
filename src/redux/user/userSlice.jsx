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
    reducers: {
        logout: (state) => {
            state.authenticated = false
            state.user = userInitialState
            localStorage.removeItem("token")
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userSignin.pending, (state) => { state.status = "loadng" })
            .addCase(userSignin.rejected, (state, action) => { 
                state.status = "idle"; 
                state.error = action.error.message 
            }).addCase(userSignin.fulfilled, (state, action) => {
                state.status = "idle";
                state.user = action.payload.data.user;
                localStorage.setItem("token", action.payload.data.token)
                state.authenticated = true
            })
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;
