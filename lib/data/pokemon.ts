import { CardData, Pokemon } from "@/lib/types/pokemon";

import prisma from "@/lib/prisma";


const ITEMS_PER_PAGE = 16;
/* Given a query string and a page number, fetch a 16 count Pokemon page */
export async function fetchPokemon(
  query: string,
  page: number,
): Promise<CardData[]> {
  const offset = ITEMS_PER_PAGE * (page - 1);
  try {
    const data = await prisma.pokemon.findMany({
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
    const pokemon = data.map(p => {
      return {
        id: p.id,
        name: p.name,
        full_name: p.species.full_name,
        image_url: p.image_url,
        types: p.types,
      }
    });
    return pokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Pokemon data");
  }
}

/* Given an id number, fetch an individual Pokemon */
export async function fetchPokemonById(id: number): Promise<Pokemon | null> {
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
          },
          orderBy: {
            id: "asc",
          }
        }
      }
    });
    
    if (!pokemon) return null;

    const left = !!pokemon.species.left_name && !!pokemon.species.left_full_name ? 
      { name: pokemon.species.left_name, full_name: pokemon.species.left_full_name } :
      null;
    const right = !!pokemon.species.right_name && !!pokemon.species.right_full_name ? 
      { name: pokemon.species.right_name, full_name: pokemon.species.right_full_name } :
      null;
    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image_url: pokemon.image_url,
      full_name: pokemon.species.full_name,
      height: pokemon.height,
      weight: pokemon.weight,
      left,
      right,
      base_happiness: pokemon.species.base_happiness,
      capture_rate: pokemon.species.capture_rate,
      egg_cycles: pokemon.species.egg_cycles,
      egg_groups: pokemon.species.egg_groups,
      growth_rate: pokemon.species.growth_rate,
      flavor_texts: pokemon.species.flavor_texts,
      gender_rate: pokemon.species.gender_rate,
      genus: pokemon.species.genus,
      is_legendary: pokemon.species.is_legendary,
      is_mythical: pokemon.species.is_mythical,
      types: pokemon.types,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon with ID ${id}`);
  }
}


/* Given an id number, fetch an individual Pokemon */
export async function fetchPokemonByName(name: string): Promise<Pokemon | null> {
  try {
    let pokemon = await prisma.pokemon.findFirst({
      where: {
        name,
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
          },
          orderBy: {
            id: "asc",
          }
        }
      }
    });

    if (!pokemon) return null;

    const left = !!pokemon.species.left_name && !!pokemon.species.left_full_name ? 
      { name: pokemon.species.left_name, full_name: pokemon.species.left_full_name } :
      null;
    const right = !!pokemon.species.right_name && !!pokemon.species.right_full_name ? 
      { name: pokemon.species.right_name, full_name: pokemon.species.right_full_name } :
      null;
    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      image_url: pokemon.image_url,
      full_name: pokemon.species.full_name,
      height: pokemon.height,
      weight: pokemon.weight,
      left,
      right,
      base_happiness: pokemon.species.base_happiness,
      capture_rate: pokemon.species.capture_rate,
      egg_cycles: pokemon.species.egg_cycles,
      egg_groups: pokemon.species.egg_groups,
      growth_rate: pokemon.species.growth_rate,
      flavor_texts: pokemon.species.flavor_texts,
      gender_rate: pokemon.species.gender_rate,
      genus: pokemon.species.genus,
      is_legendary: pokemon.species.is_legendary,
      is_mythical: pokemon.species.is_mythical,
      types: pokemon.types,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon with name ${name}`);
  }
}



/**
 * Fetch a number of random Pokemon
 * @returns 
 */
export async function fetchRandomPokemon(count=10): Promise<CardData[]> {
  try {
    const numPokemon = await prisma.pokemon.count();
    let randomIds = [];
    for (let i = 0; i < count; i++) {
      let randomId = Math.floor(Math.random() * numPokemon);
      while (randomId in randomIds) {
        randomId = Math.floor(Math.random() * numPokemon);
      }
      randomIds.push(randomId);
    }

    let data = await prisma.pokemon.findMany({
      where: {
        id: {
          in: randomIds,
        },
        is_default: true,
      },
      include: {
        species: true,
        types: true,
      },
    });

    const pokemon = data.map(p => {
      return {
        id: p.id,
        name: p.name,
        full_name: p.species.full_name,
        image_url: p.image_url,
        types: p.types,
      }
    });
    return pokemon;
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