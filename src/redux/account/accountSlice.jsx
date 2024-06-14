import { createSlice } from "@reduxjs/toolkit"
import { getAccountInfo, updateAccountInfo } from "./accountReducer"


const initialState = {
    info: {},
    error: null,
    state: 'idle'
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAccountInfo.pending, (state) => {
                state.state = 'loading'
            })

            .addCase(getAccountInfo.rejected, (state, action) => {
                state.state = 'idle'
                state.error = action.error.message
            })

            .addCase(getAccountInfo.fulfilled, (state, action) => {
                state.state = 'idle'
                state.info = action.payload.data
            })


            .addCase(updateAccountInfo.pending, (state) => {
                state.state = 'loading'
            })

            .addCase(updateAccountInfo.rejected, (state, action) => {
                state.state = 'idle'
                state.error = action.error.message
            })

            .addCase(updateAccountInfo.fulfilled, (state, action) => {
                state.state = 'idle'
                state.info.name = action.payload.data.name
                state.info.username = action.payload.data.username
            })

    }
})

export default accountSlice.reducer