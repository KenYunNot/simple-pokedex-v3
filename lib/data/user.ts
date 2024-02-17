import prisma from "@/lib/prisma";


/**
 * Given an email address, fetch the user if it exists
 */
export async function fetchUserByEmail(email: string) {
  try {
    let user = await prisma.user.findUnique({
      where: {
        email,
      }
    });
    return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch User with email ${email}`);
  }
}