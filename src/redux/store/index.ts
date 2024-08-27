import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import likedCarsSlice from "../slices/car-slice-liked";
import { api } from "../api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    likedCars: likedCarsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
