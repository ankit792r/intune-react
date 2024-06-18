import { createSlice } from "@reduxjs/toolkit";
import appInitialState from "./initialState";
import { openChat } from "./appReducers";

const appSlice = createSlice({
    name: "app",
    initialState: appInitialState,
    reducers: {
        setChatLoaded: (state, action) => {
            state.isChatLoaded = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(openChat.fulfilled, (state, action) => {
                state.opendChat = action.payload
            })
    }
})

export const { setChatLoaded } = appSlice.actions
export default appSlice.reducer
