"use server"

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { LoginSchema } from "@/schemas";

export async function login(values: FormData) {
  // Validate fields here, if the input fields are not valid return an error message
  const credentials = {
    email: values.get('email'),
    password: values.get('password'),
  }
  const validatedCredentials = LoginSchema.safeParse(credentials);
  if (!validatedCredentials.success) {
    const issue = validatedCredentials.error.issues[0];
    return { error: issue.message };
  }

  const { email, password } = validatedCredentials.data;
  
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }); 
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Username or password is incorrect" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}