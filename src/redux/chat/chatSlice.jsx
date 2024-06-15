import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    chats: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addChat: (state, action) => {
            state.chats.push(action.payload)
        }
    },
})


export const { addChat } = chatSlice.actions
export default chatSlice.reducer