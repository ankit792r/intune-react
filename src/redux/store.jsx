import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice";
import accountReducer from "./account/accountSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})