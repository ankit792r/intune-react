import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import mainLayoutSlice from "./features/mainLayoutSlice"

const store = configureStore({
    reducer: {
        authReducer,
        mainLayoutSlice
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch