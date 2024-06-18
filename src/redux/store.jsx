import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice";
import appReducer from './app/appSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})