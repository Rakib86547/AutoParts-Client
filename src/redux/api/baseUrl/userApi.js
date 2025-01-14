/* eslint-disable no-unused-vars */
import { baseApi } from "./baseUrl";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        saveSignupUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/signup',
                method: 'POST',
                body: userInfo
            })
        }),
        saveLoginUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/login',
                method: 'PUT',
                body: userInfo
            })
        })
    })
});

export const { useSaveSignupUserMutation, useSaveLoginUserMutation } = userApi;