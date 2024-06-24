import { createSlice } from "@reduxjs/toolkit";
import appInitialState from "./initialState";
import { fetchServerStates } from "./appReducers";

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
    },
    extraReducers: builder => {
        builder.addCase(fetchServerStates.pending, (state) => { state.serverStates.loading = true })
        builder.addCase(fetchServerStates.rejected, (state) => { state.serverStates.loading = false })
        builder.addCase(fetchServerStates.fulfilled, (state, action) => {
            state.serverStates.loading = false
            state.serverStates.data = action.payload.data;
        })
    }
})

export const { setChatLoaded, openChatWithIndex } = appSlice.actions
export default appSlice.reducer
