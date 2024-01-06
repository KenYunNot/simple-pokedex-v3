import prisma from "@/app/lib/prisma";

const ITEMS_PER_PAGE = 16;
/* Fetches Pokemon data by page (16 Pokemon at a time) for the given query and page number */
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
        is_default: true,
      },
      include: {
        types: true,
        species: true,
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

/* Fetches Pokemon data by the given id or name */
export async function fetchPokemonById(id: number) {
  try {
    let pokemon = await prisma.pokemon.findFirst({
      where: {
        id,
      },
      include: {
        types: true,
        species: true,
      }
    });
    return pokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon with ID ${id}`);
  }
}

export async function fetchPokemonSpeciesById(id: number) {
  try {
    let species = await prisma.pokemonSpecies.findFirst({
      where: {
        id,
      },
      include: {
        pokemon: {
          include: {
            species: true,
            types: true,
          }
        }
      },
    });
    return species;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon species with ID ${id}`);
  }
}

export async function fetchPokemonFullName(id: number) {
  try {
    let species = await prisma.pokemonSpecies.findFirst({
      where: {
        id,
      },
      select: {
        full_name: true
      }
    });
    return species ? species.full_name : undefined;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon species with ID ${id}`);
  }
}

/* Takes an identifier either in the form of a number id or a string name and returns the corresponding Pokemon's id */
export async function fetchPokemonId(identifier: string) {
  let id = Number(identifier);
  // If the identifier is already a number, return it as the id
  if (!Number.isNaN(id)) 
    return id;
  try {
    let pokemon = await prisma.pokemonSpecies.findFirst({
      where: {
        name: identifier,
      },
    }); 
    // If no Pokemon was found, return an invalid id
    if (!pokemon) 
      return -1;
    return pokemon.id;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon ID for \'${identifier}\'`);
  }
}

/* Counts the total number of pages (16 Pokemon per page) for a given query */
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
        is_default: true,
      },
    });
    let count = aggregations._count.name;
    return Math.ceil(count / ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to count Pokemon pages");
  }
}