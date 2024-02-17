import prisma from "@/lib/prisma";


/* Fetch all Pokemon types (simple format) */
export async function fetchTypes() {
  try {
    let types = await prisma.type.findMany({
      orderBy: {
        id: 'asc',
      }
    });
    return types;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch types");
  }
}

/* Given an id number, fetch a type */
export async function fetchTypeByName(name: string) {
  try {
    let type = await prisma.type.findFirst({
      where: {
        name,
      },
      include: {
        double_damage_from: true,
        double_damage_to: true,
        half_damage_from: true,
        half_damage_to: true,
        no_damage_from: true,
        no_damage_to: true,
        pokemon: true,
      }
    });
    return type;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Type with name ${name}`);
  }
}