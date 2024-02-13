import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z
    .string()
    .trim()
    .min(1, {
      message: "Password is required",
    }),
  code: z.optional(z.string()),
});

export const SignupSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  username: z
    .string()
    .trim()
    .min(4, {
      message: "Username must be minimum 4 characters."
    })
    .max(16, {
      message: "Username must be maximum 16 characters."
    })
    .regex(/^[A-Za-z0-9]{4,}$/, {
      message: "Username cannot contain special characters or whitespace"
    }),
  password: z
    .string()
    .trim()
    .min(6, {
      message: "Password must be minimum 6 characters.",
    })
    .max(18, {
      message: "Password must be maximum 18 characters.",
    })
    .regex(/[\ ~`! @#$%^&*()-_+={}[\]\\;:"<>,.\/?]/, {
      message: "Password must contain a special character",
    })
    .regex(/[0-9]/, {
      message: "Password must contain a number",
    }),
})