import { createSlice } from "@reduxjs/toolkit"
import { login } from "../auth/authActions"
import type { ApiResponse } from "../../../utils/api"
import { saveToken } from "../../../utils/token"
import { getUserData, updateBasic, updateEmail, updateEmailRequest, updateProfile } from "./userActions"

interface InitialState {
    isLoggedIn: boolean,
    user: User | null,
    loading: {
        userData: boolean,
        profileUpdate: boolean,
        basicUpdate: boolean,
        emailUpdateRequest: boolean,
        emailUpdate: boolean
    },
    error: {
        userData: string | null,
        profileUpdate: string | null,
        basicUpdate: string | null,
        emailUpdateRequest: string | null,
        emailUpdate: string | null
    },
}

const initialState: InitialState = {
    isLoggedIn: false,
    user: null,
    loading: {
        userData: false,
        profileUpdate: false,
        basicUpdate: false,
        emailUpdateRequest: false,
        emailUpdate: false
    },
    error: {
        userData: null,
        profileUpdate: null,
        basicUpdate: null,
        emailUpdateRequest: null,
        emailUpdate: null
    }
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            const payload = action.payload as ApiResponse<LoginResponse>
            if (payload.success) {
                state.isLoggedIn = true
                state.user = payload.data?.user as User
                saveToken(payload.data?.token as string)
            }
        });

        builder
            .addCase(getUserData.pending, (state) => { state.loading.userData = true })
            .addCase(getUserData.rejected, (state, action) => {
                state.error.userData = action.payload as string
                state.loading.userData = false
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.success)
                    state.user!! = payload.data as User
                else
                    state.error.userData = payload.message as string
                state.loading.userData = false
            });

        builder
            .addCase(updateProfile.pending, (state) => { state.loading.profileUpdate = true })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error.profileUpdate = action.payload as string
                state.loading.profileUpdate = false
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.success) {
                    const data = payload.data as UserProfileUpdate
                    state.user!!.username = data.username
                    state.user!!.pic = data.pic
                } else {
                    state.error.profileUpdate = payload.message as string
                }
                state.loading.profileUpdate = false
            });

        builder
            .addCase(updateBasic.pending, (state) => { state.loading.basicUpdate = true })
            .addCase(updateBasic.rejected, (state, action) => {
                state.error.basicUpdate = action.payload as string
                state.loading.basicUpdate = false
            })
            .addCase(updateBasic.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.success) {
                    const data = payload.data as UserBasicUpdate
                    state.user!!.name = data.name
                    state.user!!.bio = data.bio
                } else {
                    state.error.basicUpdate = payload.message as string
                }
                state.loading.basicUpdate = false
            });


        builder
            .addCase(updateEmailRequest.pending, (state) => { state.loading.emailUpdateRequest = true })
            .addCase(updateEmailRequest.rejected, (state, action) => {
                state.error.emailUpdateRequest = action.payload as string
                state.loading.emailUpdateRequest = false
            })
            .addCase(updateEmailRequest.fulfilled, (state, action) => {
                if (!action.payload.success)
                    state.error.emailUpdateRequest = action.payload.message as string
                state.loading.emailUpdateRequest = false
            });

        builder
            .addCase(updateEmail.pending, (state) => { state.loading.emailUpdate = true })
            .addCase(updateEmail.rejected, (state, action) => {
                state.error.emailUpdate = action.payload as string
                state.loading.emailUpdate = false
            })
            .addCase(updateEmail.fulfilled, (state, action) => {
                const payload = action.payload
                if (payload.success)
                    state.user!!.email = payload.data as string
                else
                    state.error.basicUpdate = payload.message as string
                state.loading.basicUpdate = false
            })
    }
})

export const { logoutUser } = userSlice.actions
export default userSlice.reducer