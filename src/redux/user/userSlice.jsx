import { createSlice } from "@reduxjs/toolkit";
import { fetchChat, fetchChats, getFriends, updateUser, userSignin, userSignup } from "./userReducer";
import userInitialState from "./initialState";
import { removeToken, saveToken } from "../../utility/token";
import socket from "../../services/socketService";

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
            socket.disconnect()
            state.authenticated = false
            state.user = userInitialState
            removeToken()
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
        },

        insertMessage: (state, action) => {
            const data = action.payload;
            const index = state.user.chats.findIndex(chat => chat._id == data.chatId)
            state.user.chats[index].messages.push(data.message)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userSignin.pending, (state) => { state.status = "loadng" })
            .addCase(userSignin.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message })
            .addCase(userSignin.fulfilled, function (state, action) {
                state.status = "idle";
                state.user = action.payload.data.user;
                saveToken(action.payload.data.token)
                state.authenticated = true;
            })

            .addCase(userSignup.pending, (state) => { state.status = "loadng" })
            .addCase(userSignup.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message })
            .addCase(userSignup.fulfilled, (state) => { state.status = "idle"; state.auth = true })

            .addCase(getFriends.pending, (state) => { state.status = 'loading' })
            .addCase(getFriends.rejected, (state, action) => { state.status = 'idle'; state.error = action.error.message })
            .addCase(getFriends.fulfilled, (state, action) => { state.status = 'idle'; state.user.friends = action.payload.data.friends })

            .addCase(updateUser.pending, (state) => { state.status = 'loading' })
            .addCase(updateUser.rejected, (state, action) => { state.status = 'idle'; state.error = action.error.message })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user.name = action.payload.data.name
                state.user.username = action.payload.data.username
                state.user.profilePic = action.payload.data.profilePic
            })

            .addCase(fetchChats.pending, (state) => { state.status = 'loading' })
            .addCase(fetchChats.rejected, (state, action) => { state.status = 'idle'; state.error = action.error.message })
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user.chats = action.payload.data.chats;
            })

            .addCase(fetchChat.pending, (state) => { state.status = 'loading' })
            .addCase(fetchChat.rejected, (state, action) => { state.status = 'idle'; state.error = action.error.message })
            .addCase(fetchChat.fulfilled, (state, action) => {
                state.status = 'idle';
                const data = action.payload.data;
                const index = state.user.chats.findIndex(chat => chat._id == data._id)
                state.user.chats[index].admin = data.admin
                state.user.chats[index].members = data.members
                console.log(index);
            })
    }
})

export const { logout, incomingRequest, canceledIncomingRequest, requestSent,
    cancelSentRequest, rejectRequest, requestRejected, requestAccept,
    requestAccepted, insertMessage } = userSlice.actions;
export default userSlice.reducer;
