
import prisma from "@/lib/prisma";


const ITEMS_PER_PAGE = 16;
/* Given a query string and a page number, fetch a 16 count Pokemon page */
export async function fetchPokemon(
  query: string,
  page: number,
) {
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


/* Given an id number, fetch an individual Pokemon */
export async function fetchPokemonByName(name: string) {
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
          }
        }
      }
    });
    return pokemon;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch Pokemon with name ${name}`);
  }
}



/**
 * Fetch a number of random Pokemon
 * @returns 
 */
export async function fetchRandomPokemon(count=10) {
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