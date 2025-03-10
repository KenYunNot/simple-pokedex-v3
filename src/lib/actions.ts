'use server'

import prisma from "./prisma"


const POKEMON_PER_PAGE = 12;
export async function fetchPokemonPage(page: number, query: string) {
  const pokemonPage = await prisma.pokemon.findMany({
    where: {
      name: {
        contains: query,
      },
    },
    skip: (page-1) * POKEMON_PER_PAGE,
    take: POKEMON_PER_PAGE,
  });
  return pokemonPage;
}

export async function getTotalPokemonPages() {
  const pokemonCount = await prisma.pokemon.count();
  return Math.ceil(pokemonCount / POKEMON_PER_PAGE);
}

export async function getPokemon(nameOrId: string) {
  const pokemon = await prisma.pokemon.findFirst({
    where: {
      OR: [
        { id: Number(nameOrId) || -1 },
        { name: nameOrId },
      ]
    },
    include: {
      species: {
        select: {
          genus: true,
          gender_rate: true,
        }
      }
    }
  });

  return pokemon;
}

export async function getPokemonStats(nameOrId: string) {
  const pokemonStats = await prisma.pokemon.findFirst({
    where: {
      OR: [
        { id: Number(nameOrId) || -1 },
        { name: nameOrId },
      ]
    },
    select: {
      name: true,
      hp: true,
      attack: true,
      defense: true,
      sp_attack: true,
      sp_defense: true,
      speed: true,
    }
  });

  return pokemonStats;
}