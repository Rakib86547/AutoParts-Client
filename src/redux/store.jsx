import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseUrl/baseUrl";
import userSlice from "./features/users/userSlice";

const store = configureStore({
    [baseApi.reducerPath]: baseApi.reducer,
    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store