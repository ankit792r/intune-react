import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utility/Axios";

export const fetchServerStates = createAsyncThunk("app/states", async ()=>{
    return await axiosInstance.get("system-info")
})