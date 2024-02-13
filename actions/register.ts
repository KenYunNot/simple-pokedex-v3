"use server"

import { SignupSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export async function register(values: FormData) {
  // Create credentials object with all input fields
  const credentials = {
    email: values.get('email'),
    password: values.get('password'),
    username: values.get('username'),
  }
  // Validate fields here, if the input fields are not valid return an error message
  const validatedCredentials = SignupSchema.safeParse(credentials);
  if (!validatedCredentials.success) {
    console.log(validatedCredentials.error.issues);
    const issue = validatedCredentials.error.issues[0];
    return { error: issue.message };
  }
  const { email, password, username } = validatedCredentials.data;

  // Check if email already exists
  const emailExists = await prisma.user.findUnique({
    where: {
      email,
    }
  });
  if (emailExists) return { error: "User with that email already exists!" };
  // Check if username already exists
  const usernameExists = await prisma.user.findUnique({
    where: {
      username,
    }
  });
  if (usernameExists) return { error: "User with that username already exists!" };

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  let newUser = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    }
  });
  return { success: "Successfully created user" };
}