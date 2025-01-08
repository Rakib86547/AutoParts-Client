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
        })
    })
});

export const { useSaveSignupUserMutation } = userApi;