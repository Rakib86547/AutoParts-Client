/* eslint-disable no-unused-vars */
import { baseApi } from "./baseUrl";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        saveSignupUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/signup',
                method: 'POST',
                body: userInfo
            }),
            invalidatesTags:["User"]
        }),
        saveLoginUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/login',
                method: 'PUT',
                body: userInfo
            }),
            invalidatesTags:["User"]
        }),
        passwordReset: builder.mutation({
            query: (email) => ({
                url: `/user/request-password-reset?email=${email}`,
                method: 'POST',
            })
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: '/user/reset-password',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            })
        })
    })
});

export const { useSaveSignupUserMutation, useSaveLoginUserMutation, usePasswordResetMutation, useResetPasswordMutation } = userApi;