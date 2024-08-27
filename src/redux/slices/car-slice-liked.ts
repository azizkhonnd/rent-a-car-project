import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  id: string;
  name: string;
}

interface LikedCarsState {
  cars: Car[];
}

const initialState: LikedCarsState = {
  cars: JSON.parse(localStorage.getItem("likedCars") || "[]"),
};

const likedCarsSlice = createSlice({
  name: "likedCars",
  initialState,
  reducers: {
    likeCar(state, action: PayloadAction<Car>) {
      state.cars.push(action.payload);
      localStorage.setItem("likedCars", JSON.stringify(state.cars));
    },
    unlikeCar(state, action: PayloadAction<string>) {
      state.cars = state.cars.filter(car => car.id !== action.payload);
      localStorage.setItem("likedCars", JSON.stringify(state.cars));
    },
  },
});

export const { likeCar, unlikeCar } = likedCarsSlice.actions;
export default likedCarsSlice.reducer;
