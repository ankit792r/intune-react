import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../utility/Axios';

const getAccountInfo = createAsyncThunk("account/info", async (state)=>{
    console.log(state);
})

export { getAccountInfo }