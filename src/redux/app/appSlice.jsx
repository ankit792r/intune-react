import { createSlice } from "@reduxjs/toolkit";
import appInitialState from "./initialState";

const appSlice = createSlice({
    name: "app",
    initialState: appInitialState,
    reducers: {
        setChatLoaded: (state, action) => {
            state.chatLoaded = action.payload
        }
    }
})

export const {setChatLoaded} = appSlice.actions
export default appSlice.reducer
