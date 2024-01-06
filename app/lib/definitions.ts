import { Prisma } from "@prisma/client";

export type Pokemon = Prisma.PokemonGetPayload<{
  include: {
    species: true,
    types: true,
  }
}>;

export type PokemonSpecies = Prisma.PokemonSpeciesGetPayload<{
  include: {
    pokemon: {
      include: {
        species: true,
        types: true,
      }
    }
  }
}>;

export type Type = Prisma.TypeGetPayload<{
  include: {
    double_damage_from: true,
    double_damage_to: true,
    half_damage_from: true,
    half_damage_to: true,
    no_damage_from: true,
    no_damage_to: true,
    pokemon: true,
  }
}>;