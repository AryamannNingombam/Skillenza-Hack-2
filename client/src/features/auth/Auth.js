import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import { SignInRequest,SignUpRequest } from "../../services/Auth";

const initialState = {
    signedIn: false,
    token: null,
}


export const SignInThunk = createAsyncThunk('auth/sign-in', async (data) => {
    const response = await SignInRequest(data);
    return response.data;
})

export const SignUpThunk = createAsyncThunk('auth/sign-up', async (data) => {
    const response = await SignUpRequest(data);
    return response.data;
})




const AuthSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        logout: (state, action) => {
            state.signedIn = false;
            state.token = null;
        }
    },
    extraReducers: {
        [SignUpThunk.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response);
            if (response.success) {
                state.signedIn = true;
                state.token = response.token;
                console.log("Successfully signed up!");
            } else {
                state = initialState;
            }
        },
        [SignUpThunk.rejected]: (state, action) => {
            console.log(action.payload);
            console.log("Sign up rejected!");
        },
        [SignInThunk.fulfilled]: (state, action) => {
            const response = action.payload;
            console.log(response);
            if (response.success) {
                console.log("Successful sign in!");
                state.signedIn = true;
                state.token = response.token;
            } else {
                console.log("Wrong credentials!")
            }


        },

        [SignInThunk.rejected]: (state, action) => {
            console.log(action.payload);
            console.log("Sign in rejected!");
            state = initialState;
        }
    }
});


export const {
    logout
} = AuthSlice.actions;


export default AuthSlice.reducer;