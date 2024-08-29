// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../slices/auth-slice';
import likedCarsSlice from '../slices/car-slice-liked';
import formSlice from '../slices/form-slice';
import userInfoSlice from '../slices/user-slice'; 
import { api } from '../api';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    form: formSlice,
    likedCars: likedCarsSlice,
    userInfo: userInfoSlice, 
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
