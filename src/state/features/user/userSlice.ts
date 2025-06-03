import { createSlice } from "@reduxjs/toolkit"
import { login } from "../auth/authActions"
import type { ApiResponse } from "../../../utils/api"
import { saveToken } from "../../../utils/token"

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
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            const payload = action.payload as ApiResponse<LoginResponse>
            if (payload.success) {
                state.isLoggedIn = true
                state.user = payload.data?.user as User
                saveToken(payload.data?.token as string)
            }
        });
    }
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer