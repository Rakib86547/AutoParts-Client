/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../../pages/firebase/firebase.config";



const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    isLoading: true,
    isError: false,
    error: '',
    status: ''
};


// ------------ SIGNUP/REGISTER USERS -----------
export const createUser = createAsyncThunk('user/createUser', async ({ email, password, name, image }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    const updateUserProfile = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
    });
    return { data, updateUserProfile }
});


// ------------- SIGN IN USERS ----------
export const signInUser = createAsyncThunk('user/signInUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
});

export const googleSignIn = createAsyncThunk('user/googleSignIn', async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = signInWithPopup(auth, googleProvider);
    console.log('google sign in', data);
    return data;
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // -------- SIGNUP/REGISTER USERS ------
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.name = payload?.data?.user?.displayName;
                state.email = payload?.data?.user?.email;
                state.password = payload?.data?.user?.password;
                state.image = payload?.data?.user?.photoURL;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.status = 'failed';
            })

            // ---------- SIGN IN USERS -------
            .addCase(signInUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(signInUser.fulfilled, (state, { payload }) => {
                state.name = payload?.user?.displayName;
                state.email = payload?.user?.email;
                state.password = payload?.user?.password;
                state.image = payload?.user?.photoURL;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.status = 'failed'
            })

            // --------- SIGN IN WITH GOOGLE ------
            .addCase(googleSignIn.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(googleSignIn.fulfilled, (state, { payload }) => {
                console.log('payload google signin', payload);
                state.name = payload?.user?.displayName;
                state.email = payload?.user?.email;
                state.image = payload?.user?.photoURL;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(googleSignIn.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action?.error?.message;
                state.status = 'failed'
            })
    }
});

export const { } = userSlice.actions
export default userSlice.reducer;