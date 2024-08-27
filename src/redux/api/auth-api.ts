/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignUpType, SignInType } from "../../types/dataTypes";
import { api } from "./index";

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signUp: build.mutation<SignUpType, any>({
            query: (body) => ({
                url: "/auth/sign-up",
                method: "POST",
                body
            }),

        }),

        SignIn: build.mutation<SignInType, any>({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body
            }),

        }),
        verifyOtp: build.mutation<{ token: string }, { email: string; otp: string }>({
            query: (data) => ({
                url: "/auth/send-otp",
                method: "POST",
                body: data
            })
        }),
        resendOtp: build.mutation<{ token: string }, { email: string }>({
            query: (data) => ({
                url: "/auth/resend-otp",
                method: "POST",
                body: data
            })
        })
    })
})

export const { useSignUpMutation, useVerifyOtpMutation, useResendOtpMutation, useSignInMutation } = authApi

