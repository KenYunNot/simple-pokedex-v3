import { Prisma } from "@prisma/client";

export type PokemonDetailed = Prisma.PokemonGetPayload<{
  include: {
    species: true,
    types: true,
  }
}>;

export type PokemonFull = Prisma.PokemonGetPayload<{
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
}>;

export type PokemonSpeciesDetailed = Prisma.PokemonSpeciesGetPayload<{
  include: {
    pokemon: {
      include: {
        species: true,
        types: true,
      }
    }
  }
}>;

export type PokemonSpeciesFull = Prisma.PokemonSpeciesGetPayload<{
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
  }
}>;

export type TypeFull = Prisma.TypeGetPayload<{
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