import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import appReducer from './app/appSlice'

export default combineReducers({
    user: userReducer,
    app: appReducer
})