import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../utility/Axios";

const userSignin = createAsyncThunk("usersignin", async (data) => {
    return await axiosInstance.post("auth/signin", data);
});

const userSignup = createAsyncThunk("user/signup", async (data) => {
    return await axiosInstance.post("user/new", data)
});

export { userSignin, userSignup }
