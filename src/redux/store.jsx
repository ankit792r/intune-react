import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice";
import accountReducer from "./account/accountSlice"
import friendReducer from "./friends/friendsSlice"
import chatReducer from './chat/chatSlice'
import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        account: accountReducer,
        friends: friendReducer,
        chat: chatReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})