import type { Pokemon } from "@/lib/types/pokemon";

import Image from "next/image";

import PokedexTable from "./pokedex-table";
import TrainingTable from "./training-table";
import BreedingTable from "./breeding-table";
import TypeDefensesTable from "./type-defenses-table";


export default function PokemonPanel({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  return (
    <div>
      <Image
        src={pokemon.image_url}
        width={475}
        height={475}
        alt={`Image of ${pokemon.name}`}
      />
      <PokedexTable pokemon={pokemon} />
      <TrainingTable pokemon={pokemon} />
      <BreedingTable pokemon={pokemon} />
      <TypeDefensesTable pokemon={pokemon} />
    </div>
  );
}
