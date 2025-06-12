import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../../utils/api";
import api from "../../../utils/api";
import { AxiosError } from "axios";

export const getFriendsList = createAsyncThunk<
    ApiResponse<Friend[]>,
    undefined,
    { rejectValue: string }
>("friends/listFriends", async (_, { rejectWithValue }) => {
    try {
        return await api.get<Friend[]>("/friends/list")
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while gatting friends list");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const getFriendsRequestList = createAsyncThunk<
    ApiResponse<FriendRequest[]>,
    undefined,
    { rejectValue: string }
>("friends/listFriendRequests", async (_, { rejectWithValue }) => {
    try {
        return await api.get<FriendRequest[]>("/friends/list-requests")
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while gatting user's friend requests");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const sendFriendRequest = createAsyncThunk<
    ApiResponse<Friend>,
    FriendRequestBody,
    { rejectValue: string }
>("friends/sendRequests", async (data, { rejectWithValue }) => {
    try {
        return await api.post<Friend>("/friends/new-request", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while sending friend request");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const updateFriendStatus = createAsyncThunk<
    ApiResponse<Friend | undefined>,
    UpdateFriendStatus,
    { rejectValue: string }
>("friends/updateStatus", async (data, { rejectWithValue }) => {
    try {
        return await api.post<Friend | undefined>("/friends/update-status", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while accepting friend request");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const deleteFriendRequest = createAsyncThunk<
    ApiResponse<string>,
    { requestId: string },
    { rejectValue: string }
>("friends/deleteRequest", async ({ requestId }, { rejectWithValue }) => {
    try {
        return await api.delete<string>(`/friends/delete/${requestId}`)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while accepting friend request");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})
