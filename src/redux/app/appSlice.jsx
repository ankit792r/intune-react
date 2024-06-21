import { createSlice } from "@reduxjs/toolkit";
import appInitialState from "./initialState";

const appSlice = createSlice({
    name: "app",
    initialState: appInitialState,
    reducers: {
        setChatLoaded: (state, action) => {
            state.isChatLoaded = action.payload
        },

        openChatWithIndex: (state, action) => {
            state.openChatIndex = action.payload
        }
    }
})

export const { setChatLoaded, openChatWithIndex } = appSlice.actions
export default appSlice.reducer
