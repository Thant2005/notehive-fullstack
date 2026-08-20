import z, { email } from "zod";

export const signUpSchema = z.object({
  name: z.string({ error: "Name is required" }),
  email: z.email({ error: "Invalid email format" }),
  password: z
    .string("Password is required")
    .min(6, { error: "Password must be at least 8 characters" })
    .max(20, { error: "Password must not exceed 30 characters" }),
  university: z.string({ error: "University is required" }),
  year: z.number({ error: "Year must be number" }),
  faculty: z.string(),
});
export const signInSchema = z.object({
  email: z.email({ error: "Invalid email format" }),
  password: z
    .string("Password is required")
    .min(6, { error: "Password must be at least 8 characters" })
    .max(20, { error: "Password must not exceed 30 characters" }),
});

export type signUpInput = z.infer<typeof signUpSchema>;
export type signInInput = z.infer<typeof signInSchema>;
