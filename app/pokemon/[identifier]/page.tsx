import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PokedexData from "@/app/ui/pokemon/[idOrName]/pokedex";
import TrainingData from "@/app/ui/pokemon/[idOrName]/training";
import TypeDefenses from "@/app/ui/pokemon/[idOrName]/type-defenses";
import { fetchPokemonSpeciesById, fetchPokemonId, fetchPokemonFullName } from "@/app/lib/data";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
} from '@heroicons/react/24/outline';

export default async function Pokemon({ params }: { params: { identifier: string } }) {
  const identifier = params.identifier;
  const id = await fetchPokemonId(identifier);
  const species = await fetchPokemonSpeciesById(id);

  if (!species) {
    notFound();
  }

  const left = await fetchPokemonFullName(id-1);
  const right = await fetchPokemonFullName(id+1);

  return (
    <div className="m-4">
      <nav className="w-full table clear-both my-1 px-2">
        {left && (
          <Link href={`/pokemon/${id-1}`} className="flex items-center text-blue-700 float-left">
            <ChevronLeftIcon className="inline w-4 h-4" />
            #{String(id-1).padStart(4, '0')} {left}
          </Link>
        )}
        {right && (
          <Link href={`/pokemon/${id+1}`} className="flex items-center text-blue-700 float-right">
            #{String(id+1).padStart(4, '0')} {right}
            <ChevronRightIcon className="inline w-4 h-4" />
          </Link>
        )}
      </nav>
      <h1 className="pb-4 text-3xl text-center font-semibold border-b border-gray-300">
        {species.full_name}
      </h1>
      {species.pokemon.map((pokemon) => {
        return (
          <div>
            <Image
              src={pokemon.image_url}
              width={475}
              height={475}
              alt={`Image of ${pokemon.name}`}
            />
            <PokedexData pokemon={pokemon}/>
            <TrainingData pokemon={pokemon} />
            <TypeDefenses pokemon={pokemon} />
          </div>
        )
      })}
    </div>
  );
}
