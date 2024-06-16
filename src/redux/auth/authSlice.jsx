import { createSlice } from '@reduxjs/toolkit'
import { signin, signup } from './authReducer'
import socket from "../../services/socketService";

const initialState = {
    authenticated: false,
    error: null,
    loading: false,
    user: {
        _id: null,
        name: null,
        username: null,
        email: null,
        chats: [],
        friends: {
            friends: [],
            incoming: [],
            outgoing: []
        }
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.authenticated = false
            state.error = null
            state.user = {
                _id: null,
                name: null,
                username: null,
                email: null,
                chats: [],
                friends: {
                    friends: [],
                    incoming: [],
                    outgoing: []
                }
            }
            socket.disconnect()
        }
    },
    extraReducers: builder => {
        builder
            .addCase(signin.pending, (state) => {state.loading = true})

            .addCase(signin.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
                console.log(action.error);
            })

            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false
                state.authenticated = true
                state.user = action.payload.data.user
                localStorage.setItem("token", action.payload.data.token)
            })

            .addCase(signup.pending, (state) => {
                state.loading = true
            })

            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false
                state.userId = action.payload.data._id
                state.authenticated = true
                state.token = action.payload.data.token
            })

    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer