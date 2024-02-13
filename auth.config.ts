import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { fetchUserByEmail } from "@/lib/data"
import { LoginSchema } from "@/schemas"
import bcrypt from "bcryptjs";

export default {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = LoginSchema.safeParse(credentials);

        console.log(validatedCredentials);
        if (validatedCredentials.success) {
          const { email, password } = validatedCredentials.data;

          const user = await fetchUserByEmail(email);

          if (!user || !user.password) return null;
          
          const passwordsMatch = await bcrypt.compare(
            password,
            user.password,
          );

          if (passwordsMatch) return user;
        }
        return null;
      },
    })
  ],
} satisfies NextAuthConfig