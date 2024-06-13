import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utility/Axios';

const getAccountInfo = createAsyncThunk("account/info", async (_, state) => {
    const stateData = state.getState()
    return await axiosInstance.get("user/get", { headers: { Authorization: stateData.auth.token } })
})

export { getAccountInfo }