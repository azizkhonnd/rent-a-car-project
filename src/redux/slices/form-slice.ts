import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IFormValues {
    name?: string | null;
    model?: string | null;
    category?: string | null;
    status?: string | null;
    description?: string | null;
    images?: string[];
    thumbnail?: string | null;
    year?: string | null;
    mileage?: number | null;
    engineType?: string | null;
    transmission?: string | null;
    carPrice?: number | null;
    carRentPrice?: number | null;
    seats?: number | null;
    capacity?: number | null;
    fuel?: number | null;
}

const initialState: IFormValues = {
    name: null,
    model: null,
    category: null,
    status: null,
    description: null,
    images: [],
    thumbnail: null,
    year: null,
    mileage: null,
    engineType: null,
    transmission: null,
    carPrice: null,
    carRentPrice: null,
    seats: null,
    capacity: null,
    fuel: null,
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        fillBasicInfo: (state, action: PayloadAction<IFormValues>) => {
            state.name = action.payload.name;
            state.model = action.payload.model;
            state.category = action.payload.category;
            state.status = action.payload.status;
            state.description = action.payload.description;
            state.images = action.payload.images || [];
            state.thumbnail = action.payload.thumbnail;
        },
        fillTechnicalInfo: (state, action: PayloadAction<IFormValues>) => {
            state.year = action.payload.year;
            state.mileage = action.payload.mileage;
            state.engineType = action.payload.engineType;
            state.transmission = action.payload.transmission;
            state.carPrice = action.payload.carPrice;
            state.carRentPrice = action.payload.carRentPrice;
            state.seats = action.payload.seats;
            state.capacity = action.payload.capacity;
            state.fuel = action.payload.fuel;
        },
    },
});

export const { fillBasicInfo, fillTechnicalInfo } = formSlice.actions;
export default formSlice.reducer;
