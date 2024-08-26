import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceInitialState } from "../../types/initialStateTypes";
import { User } from "../../types/dataTypes";

const initialState: AuthSliceInitialState = {
    token: localStorage.getItem("token"),
    user: JSON.parse(localStorage.getItem("user") as string),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<{ token: string; user: User }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        logOut: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
