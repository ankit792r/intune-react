import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./authActions"
import type { ApiResponse } from "../../../utils/api"

interface InitialState {
    loading: {
        login: boolean,
        register: boolean
    },
    error: {
        login: string | null,
        register: string | null
    }
}

const initialState: InitialState = {
    loading: {
        login: false,
        register: false
    },
    error: {
        login: null,
        register: null
    }
}

const authReducer = createSlice({
    name: "authReducer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.loading.login = true
            })
            .addCase(login.rejected, (state, action) => {
                state.loading.login = false
                state.error.login = action.payload as string
            })
            .addCase(login.fulfilled, (state, action) => {
                const payload = action.payload as ApiResponse<LoginResponse>
                if (payload.success) {
                    // todo: update user in userReducer
                } else {
                    state.error.login = payload.message
                }
                state.loading.login = false
            });

        builder
            .addCase(register.pending, (state) => {
                state.loading.register = true
            })
            .addCase(register.rejected, (state, action) => {
                state.loading.register = false
                state.error.register = action.payload as string
            })
            .addCase(register.fulfilled, (state) => {
                state.loading.register = false
            });
    }
})

export const { } = authReducer.actions
export default authReducer.reducer