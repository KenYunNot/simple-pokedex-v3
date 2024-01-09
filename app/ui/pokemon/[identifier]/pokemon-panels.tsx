import { Pokemon } from "@/app/lib/definitions";
import Image from "next/image";
import PokedexData from "@/app/ui/pokemon/[identifier]/pokedex";
import TrainingData from "@/app/ui/pokemon/[identifier]/training";
import TypeDefenses from "@/app/ui/pokemon/[identifier]/type-defenses";
import BreedingData from "@/app/ui/pokemon/[identifier]/breeding";

export default function PokemonPanels({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return (
          <div
            className={`pokemon-panel ${pokemon.name} ${index === 0 ? "active" : ""}`}
            key={pokemon.id}
          >
            <Image
              src={pokemon.image_url}
              width={475}
              height={475}
              alt={`Image of ${pokemon.name}`}
            />
            <PokedexData pokemon={pokemon} />
            <TrainingData pokemon={pokemon} />
            <BreedingData pokemon={pokemon} />
            <TypeDefenses pokemon={pokemon} />
          </div>
        );
      })}
    </div>
  );
}
