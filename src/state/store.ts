import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./features/auth/authSlice"
import userSlice from "./features/user/userSlice"
import mainLayoutSlice from "./features/mainLayoutSlice"

const store = configureStore({
    reducer: {
        authSlice,
        userSlice,
        mainLayoutSlice,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch