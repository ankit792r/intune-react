import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../../utils/api";
import api from "../../../utils/api";
import { AxiosError } from "axios";

export const login = createAsyncThunk<
    ApiResponse<LoginResponse>,
    LoginBody,
    { rejectValue: string }
>("auth/login", async (data, { rejectWithValue }) => {
    try {
        return await api.post<LoginResponse>("/auth/login", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while logging in user");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})

export const register = createAsyncThunk<
    ApiResponse<RegisterResponse>,
    RegisterBody,
    { rejectValue: string }
>("auth/register", async (data, { rejectWithValue }) => {
    try {
        return await api.post<RegisterResponse>("/user/register", data)
    } catch (error) {
        if (error instanceof AxiosError) {
            const errorResponse = error.response?.data as ApiResponse<unknown>;
            return rejectWithValue(errorResponse?.message || "An error occurred while registering user");
        }
        return rejectWithValue(
            error instanceof Error ? error.message : "An unknown error occurred"
        )
    }
})
