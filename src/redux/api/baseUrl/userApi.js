/* eslint-disable no-unused-vars */
import { baseApi } from "./baseUrl";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/signup',
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: userInfo
            })
        })
    })
});

export const { useRegisterUserMutation } = userApi;