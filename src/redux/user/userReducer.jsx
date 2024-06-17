import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../utility/Axios";

const userSignin = createAsyncThunk("user/userSignin", async (data) => {
    return await axiosInstance.post("auth/signin", data);
});

const userSignup = createAsyncThunk("user/userSignup", async (data) => {
    return await axiosInstance.post("user/new", data);
});

const getFriends = createAsyncThunk("user/friends", async () => {
    const token = localStorage.getItem("token")
    return await axiosInstance.get("user/friends", { headers: { Authorization: token } })
})

const updateUser = createAsyncThunk("user/upate", async (data)=> {
    const token = localStorage.getItem("token")
    return await axiosInstance.put("user/update/profile", data, { headers: { Authorization: token } })
})

export { userSignin, userSignup, getFriends, updateUser }
