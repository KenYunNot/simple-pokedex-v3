import prisma from "@/lib/prisma";


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