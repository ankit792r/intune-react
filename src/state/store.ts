import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth/authSlice"
import userReducer from "./features/user/userSlice"
import mainLayoutReducer from "./features/mainLayoutSlice"
import friendsReducer from "./features/friends/friendsSlice"

const store = configureStore({
    reducer: {
        authReducer,
        userReducer,
        mainLayoutReducer,
        friendsReducer
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch