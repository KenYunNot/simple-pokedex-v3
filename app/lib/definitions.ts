import { Prisma } from "@prisma/client";

export type Pokemon = Prisma.PokemonGetPayload<{
  include: {
    species: true,
    types: true,
  }
}>;

export type PokemonSpecies = Prisma.PokemonSpeciesGetPayload<{
  include: {
    pokemon: true,
  }
}>;

export type Type = Prisma.TypeGetPayload<{
  include: {
    pokemon: true,
  }
}>;