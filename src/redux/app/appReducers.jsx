import { createAsyncThunk } from "@reduxjs/toolkit";

export const openChat = createAsyncThunk("app/open", async (chatId, thunkApi) => {
    const state = thunkApi.getState();
    const chat = state.user.user.chats.find(chat => chat._id == chatId);
    return chat;
})