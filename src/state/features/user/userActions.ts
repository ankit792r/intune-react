import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../../utils/api";
import api from "../../../utils/api";
import { AxiosError } from "axios";

export const getUserData = createAsyncThunk<
    ApiResponse<User>,
    { rejectValue: string }
>("user/getData", async (_, { rejectWithValue }) => {
    try {
        return await api.get<User>("/user/data")
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while gatting user details");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const updateProfile = createAsyncThunk<
    ApiResponse<UserProfileUpdate>,
    UserProfileUpdate,
    { rejectValue: string }
>("user/profile", async (data, { rejectWithValue }) => {
    try {
        return await api.put<UserProfileUpdate>("/user/profile", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while updating user profile details");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const updateBasic = createAsyncThunk<
    ApiResponse<UserBasicUpdate>,
    UserBasicUpdate,
    { rejectValue: string }
>("user/basic", async (data, { rejectWithValue }) => {
    try {
        return await api.put<UserBasicUpdate>("/user/basic", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while updating user basic detailss");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const updateEmailRequest = createAsyncThunk<
    ApiResponse<unknown>,
    UserEmailUpdate,
    { rejectValue: string }
>("user/updateEmailRequest", async (data, { rejectWithValue }) => {
    try {
        return await api.post<unknown>("/user/email-update-request", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while requesting email update");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})


export const updateEmail = createAsyncThunk<
    ApiResponse<string>,
    UserEmailUpdateBody,
    { rejectValue: string }
>("user/updateEmail", async (data, { rejectWithValue }) => {
    try {
        return await api.post<string>("/user/email-update", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while updating email");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})