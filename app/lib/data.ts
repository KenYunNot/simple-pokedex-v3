import prisma from "@/app/lib/prisma";

const ITEMS_PER_PAGE = 16;
/* Given a query string and a page number, fetch a 16 count Pokemon page */
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
        species: true,
        types: true,
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

/* Given an id number, fetch an individual Pokemon */
export async function fetchPokemonById(id: number) {
  try {
    let pokemon = await prisma.pokemon.findFirst({
      where: {
        id,
      },
      include: {
        species: true,
        types: {
          include: {
            double_damage_from: true,
            double_damage_to: true,
            half_damage_from: true,
            half_damage_to: true,
            no_damage_from: true,
            no_damage_to: true,
            pokemon: true,
          }
        }
      }
    });
    return pokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon with ID ${id}`);
  }
}

/* Given an id number, fetch an individual Pokemon species */
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
            types: {
              include: {
                double_damage_from: true,
                double_damage_to: true,
                half_damage_from: true,
                half_damage_to: true,
                no_damage_from: true,
                no_damage_to: true,
                pokemon: true,
              }
            }
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

/* Given an id number, fetch a Pokemon's full name in its default form (full_name field provided in PokemonSpecies) */
export async function fetchPokemonSpeciesNames(id: number) {
  try {
    let species = await prisma.pokemonSpecies.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        full_name: true,
      }
    });
    return species;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon species with ID ${id}`);
  }
}

/* Given an identifier either in the form of a number id or a string name, return the corresponding Pokemon's id */
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

/* Fetch a number of random Pokemon */
export async function fetchRandomPokemon() {
  const COUNT = 10;
  try {
    let aggregations = await prisma.pokemon.aggregate({
      _count: {
        id: true,
      },
      where: {
        is_default: true,
      }
    });
    let numPokemon = aggregations._count.id;
    let randomIds = [];
    for (let i = 0; i < COUNT; i++) {
      let randomId = Math.floor(Math.random() * numPokemon);
      while (randomId in randomIds) {
        randomId = Math.floor(Math.random() * numPokemon);
      }
      randomIds.push(randomId);
    }
    let randomPokemon = await prisma.pokemon.findMany({
      where: {
        id: {
          in: randomIds,
        },
      },
      include: {
        species: true,
        types: true,
      }
    });
    return randomPokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon`);
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