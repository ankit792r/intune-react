import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utility/Axios";

const getFriends = createAsyncThunk("frineds/get", async (_, state) => {
    const stateData = state.getState()
    return await axiosInstance.get("user/friends", { headers: { Authorization: stateData.auth.token } })
})

export { getFriends }