import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/auth-slice";
import likedCarsSlice from "../slices/car-slice-liked";
import { api } from "../api";
import formSlice from "../slices/form-slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    form: formSlice,
    likedCars: likedCarsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
