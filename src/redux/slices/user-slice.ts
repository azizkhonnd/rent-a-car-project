import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoState {
    first_name: string;
    password: string;
    avatar: string | null;
}

const initialState: UserInfoState = {
    first_name: localStorage.getItem('first_name') || 'John Doe',
    password: localStorage.getItem('password') || 'password123',
    avatar: localStorage.getItem('avatar') || 'https://via.placeholder.com/150',
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserInfo(state, action: PayloadAction<Partial<UserInfoState>>) {
            state.first_name = action.payload.first_name ?? state.first_name;
            state.password = action.payload.password ?? state.password;
            state.avatar = action.payload.avatar ?? state.avatar;

            localStorage.setItem('first_name', state.first_name);
            localStorage.setItem('password', state.password);
            localStorage.setItem('avatar', state.avatar ?? '');
        },
    },
});

export const { updateUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
