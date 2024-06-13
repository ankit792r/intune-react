import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const signin = createAsyncThunk("auth/signin", async (data) => {
    return await axios.post("http://localhost:5000/api/auth/signin", data);
});

const signup = createAsyncThunk("auth/signup", async (data) => {
    return await axios.post("http://localhost:5000/api/user/new", data)
});



export { signin, signup }