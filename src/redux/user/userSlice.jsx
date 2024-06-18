import { createSlice } from "@reduxjs/toolkit";
import { fetchChats, getFriends, updateUser, userSignin, userSignup } from "./userReducer";
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
        },

        incomingRequest: (state, action) => {
            state.user.requests.push(action.payload)
        },

        canceledIncomingRequest: (state, action) => {
            const creq = action.payload;
            state.user.requests = state.user.requests.filter(req => creq.requestId !== req._id)
        },

        requestSent: (state, action) => {
            state.user.requests.push(action.payload)
        },

        cancelSentRequest: (state, action) => {
            const creq = action.payload;
            state.user.requests = state.user.requests.filter(req => creq._id !== req._id)
        },

        rejectRequest: (state, action) => {
            const rreq = action.payload;
            state.user.requests = state.user.requests.filter(req => rreq._id !== req._id)
        },

        requestRejected: (state, action) => {
            const rreq = action.payload;
            state.user.requests = state.user.requests.filter(req => rreq.requestId !== req._id)
        },

        requestAccept: (state, action) => {
            state.user.chats.push(action.payload.newChat);
            state.user.requests = state.user.requests.filter(req => action.payload.requestId !== req._id)
        },

        requestAccepted: (state, action) => {
            state.user.chats.push(action.payload.newChat);
            state.user.requests = state.user.requests.filter(req => action.payload.requestId !== req._id)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userSignin.pending, (state) => { state.status = "loadng" })
            .addCase(userSignin.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message })
            .addCase(userSignin.fulfilled, function (state, action) {
                state.status = "idle";
                state.user = action.payload.data.user;
                localStorage.setItem("token", action.payload.data.token)
                state.authenticated = true;
            })

            .addCase(userSignup.pending, (state) => { state.status = "loadng" })
            .addCase(userSignup.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message })
            .addCase(userSignup.fulfilled, (state) => { state.status = "idle"; state.auth = true })

            .addCase(getFriends.pending, (state) => { state.status = 'loading' })
            .addCase(getFriends.rejected, (state, action) => { state.status = 'idle'; state.error = action.error.message })
            .addCase(getFriends.fulfilled, (state, action) => { state.status = 'idle'; state.user.friends = action.payload.data.friends })

            .addCase(updateUser.pending, (state) => { state.state = 'loading' })
            .addCase(updateUser.rejected, (state, action) => { state.state = 'idle'; state.error = action.error.message })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.state = 'idle';
                state.user.name = action.payload.data.name
                state.user.username = action.payload.data.username
            })

            .addCase(fetchChats.pending, (state) => { state.state = 'loading' })
            .addCase(fetchChats.rejected, (state, action) => { state.state = 'idle'; state.error = action.error.message })
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.state = 'idle';
                state.user.chats = action.payload.data.chats;
            })
    }
})

export const { logout, incomingRequest, canceledIncomingRequest, requestSent,
    cancelSentRequest, rejectRequest, requestRejected, requestAccept, requestAccepted } = userSlice.actions;
export default userSlice.reducer;
