import { createSlice } from "@reduxjs/toolkit"

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

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
})

export const {} = authSlice.actions
export default authSlice.reducer