import prisma from "@/lib/prisma";
import { cache } from "react";


const ITEMS_PER_PAGE = 16;
/* Given a query string and a page number, fetch a 16 count Pokemon page */
export async function fetchPokemon(
  query: string,
  page: number,
) {
  console.log("Fetched the pokemon");
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

/**
 * Fetch a number of random Pokemon
 * @returns 
 */
async function frp(count=10) {
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
    for (let i = 0; i < count; i++) {
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
export const fetchRandomPokemon = cache(frp);


/**
 * Given an identifier either in the form of a number id or a string name, return the corresponding Pokemon's id
 * @param identifier 
 */
export async function findPokemonId(identifier: string) : Promise<number> {
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