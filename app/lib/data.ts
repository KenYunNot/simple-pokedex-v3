import prisma from "@/app/lib/prisma";

const ITEMS_PER_PAGE = 16;
export async function fetchPokemon(
  query: string,
  page: number,
) {
  const offset = ITEMS_PER_PAGE * (page - 1);
  try {
    let pokemon = await prisma.pokemon.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      skip: offset,
      take: ITEMS_PER_PAGE,
    });
    return pokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
}


export async function countPokemonPages(query: string) {
  try {
    let aggregations = await prisma.pokemon.aggregate({
      _count: {
        name: true,
      },
      where: {
        name: {
          contains: query,
        },
      },
    });
    let count = aggregations._count.name;
    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to count pages");
  }
}