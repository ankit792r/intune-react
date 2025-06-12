import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
    activePage: "CHAT" | "FRIENDS" | "STATUS" | "SETTINGS"
}

const initialState: InitialState = {
    activePage: "CHAT"
}

const mainLyoutSlice = createSlice({
    name: "mainLayoutReducer",
    initialState,
    reducers: {
        changeActivePage: (state, action) => {
            state.activePage = action.payload
        }
    }
})

export const { changeActivePage } = mainLyoutSlice.actions
export default mainLyoutSlice.reducer