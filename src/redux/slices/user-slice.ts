import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  password: string;
  photo: string;
}

const initialState: UserState = {
  name: 'John Doe',
  password: 'password123',
  photo: 'https://via.placeholder.com/150',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
