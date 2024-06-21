import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../utility/Axios";
import { loadToken } from '../../utility/token';

const userSignin = createAsyncThunk("user/userSignin", async (data) => {
    return await axiosInstance.post("auth/signin", data);
});

const userSignup = createAsyncThunk("user/userSignup", async (data) => {
    return await axiosInstance.post("user/new", data);
});

const getFriends = createAsyncThunk("user/friends", async () => {
    return await axiosInstance.get("user/friends", { headers: { Authorization: loadToken() } })
})

const updateUser = createAsyncThunk("user/upate", async (data) => {
    return await axiosInstance.put("user/update/profile", data, { headers: { Authorization: loadToken() } })
})

const fetchChats = createAsyncThunk("user/chats", async () => {
    return await axiosInstance.get("user/get-chats", { headers: { Authorization: loadToken() } })
})

const fetchChat = createAsyncThunk("user/chat", async (chatId) => {
    return await axiosInstance.get(`user/get-chat/${chatId}`, { headers: { Authorization: loadToken() } })
})

export { userSignin, userSignup, getFriends, updateUser, fetchChats, fetchChat }
