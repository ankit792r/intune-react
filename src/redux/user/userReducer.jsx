import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../utility/Axios";

const userSignin = createAsyncThunk("user/userSignin", async (data) => {
    return await axiosInstance.post("auth/signin", data);
});

const userSignup = createAsyncThunk("user/userSignup", async (data) => {
    return await axiosInstance.post("user/new", data);
});


export { userSignin, userSignup }
