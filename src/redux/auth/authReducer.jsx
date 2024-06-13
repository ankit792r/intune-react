import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utility/Axios';

const signin = createAsyncThunk("auth/signin", async (data, state) => {
    return await axiosInstance.post("api/auth/signin", data);
});

const signup = createAsyncThunk("auth/signup", async (data) => {
    return await axiosInstance.post("api/user/new", data)
});



export { signin, signup }