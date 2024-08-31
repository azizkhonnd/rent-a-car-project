import { UploadImage, UploadImages } from "../../types/dataTypes";
import { api } from "./index";

const uploadApi = api.injectEndpoints({
    endpoints: (build) => ({
        uploadMultipleFiles: build.mutation<UploadImages, FormData>({
            query: (body) => ({
                url: "upload/multiple",
                method: "POST",
                body
            }),
            invalidatesTags: ["CARS"]
        }),
        uploadSingleFile: build.mutation<UploadImage, FormData>({
            query: (body) => ({
                url: "upload/single",
                method: "POST",
                body
            }),
            invalidatesTags: ["CARS"]
        }),
    })
})

export const { useUploadMultipleFilesMutation, useUploadSingleFileMutation } = uploadApi;
