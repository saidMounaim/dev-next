import { z } from "zod";

const validImageTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

// Sign In Schema
export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Sign Up Schema
export const SignUpFormSchema = z
  .object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Submission job schema
export const SubmissionJobSchema = z
  .object({
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    type: z.string().min(1, { message: "Type is required" }),
    locationType: z.string().min(1, { message: "Location Type is required" }),
    location: z.string().optional(),
    salary: z
      .number()
      .min(10, { message: "Salary is required" })
      .nonnegative({ message: "Salary must a positive number" }),
    companyName: z.string().min(1, { message: "Company name is required" }),
    applicationEmail: z.string().email().optional().or(z.literal("")),
    applicationUrl: z.string().url().optional().or(z.literal("")),
    companyLogoUrl: z
      .instanceof(File)
      .optional()
      .refine((file) => !file || validImageTypes.includes(file.type), {
        message: "File must be an image (jpeg, png, webp).",
      }),
  })
  .refine((data) => data.locationType === "Remote", {
    message: "Location is required",
    path: ["location"],
  });
