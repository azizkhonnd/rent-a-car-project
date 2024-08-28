import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IFormValues {
    name?: string | null;
    model?: string | null;
    category?: string | null;
    status?: string | null;
    description?: string | null;
    images?: string[] | [];
    thumbnail: string;
}

const initialState: IFormValues = {
    name: null,
    model: null,
    category: null,
    status: null,
    description: null,
    images: [],
    thumbnail: ""
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
            state.images = action.payload.images;
            state.thumbnail = action.payload.thumbnail;
        }
    }
})

export const { fillBasicInfo } = formSlice.actions;
export default formSlice.reducer;
