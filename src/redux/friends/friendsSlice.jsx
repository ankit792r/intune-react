import { createSlice } from "@reduxjs/toolkit"
import { getFriends } from "./friendsReducer"


const initialState = {
    friends: {
        friends: [],
        incomming: [],
        outgoind: []
    },
    error:null,
    status: 'idle'
}

const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {
        incomingRequest: (state, action) => {
            state.friends.incoming.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getFriends.pending, (state) => {
                state.status = 'loading'
            })

            .addCase(getFriends.rejected, (state, action) => {
                state.status = 'idle',
                state.error = action.error.message
            })

            .addCase(getFriends.fulfilled, (state, action)=>{
                state.status = 'idle',
                state.friends = action.payload.data.friends
            })
    }
})

export const { incomingRequest } = friendsSlice.actions
export default friendsSlice.reducer;