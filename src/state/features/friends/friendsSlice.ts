import { createSlice } from "@reduxjs/toolkit"
import { deleteFriendRequest, getFriendsList, getFriendsRequestList, sendFriendRequest, updateFriendStatus } from "./friendsAction"

interface IFriendsInitialState {
    error: {
        list: string | null
        send: string | null
        update: string | null
        accept: string | null
        delete: string | null
    },
    loading: {
        list: boolean
        send: boolean
        update: boolean
        accept: boolean
        delete: boolean
    },
    requests: FriendRequest[]
    friends: Friend[]
}


const initialState: IFriendsInitialState = {
    error: {
        list: null,
        send: null,
        update: null,
        accept: null,
        delete: null,
    },
    loading: {
        list: false,
        send: false,
        update: false,
        accept: false,
        delete: false,
    },
    requests: [],
    friends: []
}


const friendSlice = createSlice({
    name: "friendSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getFriendsList.pending, (state) => {
                state.loading.list = true
            })
            .addCase(getFriendsList.rejected, (state, action) => {
                state.error.list = action.payload as string
                state.loading.list = true
            })
            .addCase(getFriendsList.fulfilled, (state, action) => {
                const payload = action.payload;
                if (payload.success)
                    state.friends = payload.data as Friend[]
                else state.error.list = payload.message
                state.loading.list = false
            });

        builder
            .addCase(getFriendsRequestList.pending, (state) => {
                state.loading.list = true
            })
            .addCase(getFriendsRequestList.rejected, (state, action) => {
                state.error.list = action.payload as string
                state.loading.list = true
            })
            .addCase(getFriendsRequestList.fulfilled, (state, action) => {
                const payload = action.payload;
                if (payload.success)
                    state.requests = payload.data as FriendRequest[]
                else state.error.list = payload.message
                state.loading.list = false
            });


        builder
            .addCase(sendFriendRequest.pending, (state) => {
                state.loading.send = true
            })
            .addCase(sendFriendRequest.rejected, (state, action) => {
                console.log(action);
                
                state.error.send = action.payload as string
                state.loading.send = false
            })
            .addCase(sendFriendRequest.fulfilled, (state, action) => {
                const payload = action.payload;
                if (payload.success)
                    state.friends.push(payload.data as Friend)
                else state.error.send = payload.message
                state.loading.send = false
            });

        builder
            .addCase(updateFriendStatus.pending, (state) => {
                state.loading.update = true
            })
            .addCase(updateFriendStatus.rejected, (state, action) => {
                state.error.update = action.payload as string
                state.loading.update = true
            })
            .addCase(updateFriendStatus.fulfilled, (state, action) => {
                const payload = action.payload;
                if (payload.success) {
                    const idx = state.friends.findIndex(fri => fri.id == payload.data?.id)
                    if (idx) state.friends[idx] = payload.data as Friend
                } else state.error.update = payload.message

                state.loading.update = false
            });

        builder
            .addCase(deleteFriendRequest.pending, (state) => {
                state.loading.delete = true
            })
            .addCase(deleteFriendRequest.rejected, (state, action) => {
                state.error.delete = action.payload as string
                state.loading.delete = true
            })
            .addCase(deleteFriendRequest.fulfilled, (state, action) => {
                const payload = action.payload;
                if (payload.success) {
                    state.requests = state.requests.filter((req) => req.id != payload.data)
                } else state.error.update = payload.message
                state.loading.delete = false
            });
    },
})

export const { } = friendSlice.actions
export default friendSlice.reducer