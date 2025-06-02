import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
    isLoggedIn: boolean,
    user: User | null
}

const initialState: InitialState = {
    isLoggedIn: false,
    user: null
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer