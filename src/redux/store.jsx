import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice";
import accountReducer from "./account/accountSlice"
import friendReducer from "./friends/friendsSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer,
        friends: friendReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})