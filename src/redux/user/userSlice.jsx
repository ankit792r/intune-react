import { createSlice } from "@reduxjs/toolkit";
import { getFriends, updateUser, userSignin, userSignup } from "./userReducer";
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
            console.log("i was called");
            state.authenticated = false
            state.user = userInitialState
            localStorage.removeItem("token")
        },

        incomingRequest: (state, action) => {
            console.log(state);
            state.user.requests.push(action.payload)
        },

        canceledIncomingRequest: (state, action) => {
            const creq = action.payload;
            state.user.requests = state.user.requests.filter(req => creq._id !== req._id)
        },

        requestSent: (state, action) => {
            console.log(state);
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
            state.user.requests = state.user.requests.filter(req => rreq._id !== req._id)
        },

        requestAccept: (state, action) => {
            const areq = action.payload;
            state.user.friends.incoming = state.user.friends.incoming.filter(req => areq._id !== req._id)

            state.user.friends.friends.push(areq)
        },

        requestAccepted: (state, action) => {
            const areq = action.payload;
            state.user.friends.outgoing = state.user.friends.outgoing.filter(req => areq._id !== req._id)

            state.user.friends.friends.push(areq);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userSignin.pending, (state) => { state.status = "loadng" })
            .addCase(userSignin.rejected, (state, action) => { state.status = "idle"; state.error = action.error.message })
            .addCase(userSignin.fulfilled, function (state, action) {
                console.log(state.user);
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
    }
})

export const { logout, incomingRequest, canceledIncomingRequest, requestSent,
    cancelSentRequest, rejectRequest, requestRejected, requestAccept, requestAccepted } = userSlice.actions;
export default userSlice.reducer;
