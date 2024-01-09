import Link from "next/link";
import { notFound } from "next/navigation";
import PokemonTabs from "@/app/ui/pokemon/[identifier]/pokemon-tabs";
import PokemonPanels from "@/app/ui/pokemon/[identifier]/pokemon-panels";
import { fetchPokemonSpeciesById, fetchPokemonId, fetchPokemonNames } from "@/app/lib/data";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
} from '@heroicons/react/24/outline';

export default async function Pokemon({ params }: { params: { identifier: string } }) {
  const identifier = params.identifier;
  const id = await fetchPokemonId(identifier);
  const species = await fetchPokemonSpeciesById(id);

  // If the Pokemon species is not found, redirect to not found page
  if (!species) {
    notFound();
  }

  const left = await fetchPokemonNames(id-1);
  const right = await fetchPokemonNames(id+1);

  const linkStyle = "flex px-1 items-center text-blue-700 hover:bg-gray-300"

  return (
    <div className="m-4">
      <nav className="w-full table clear-both my-1 px-2">
        {left && (
          <Link href={`/pokemon/${left.name}`} className={`${linkStyle} float-left rounded-l-lg`}>
            <ChevronLeftIcon className="inline w-4 h-4" />
            #{String(id-1).padStart(4, '0')} {left.full_name}
          </Link>
        )}
        {right && (
          <Link href={`/pokemon/${right.name}`} className={`${linkStyle} float-right rounded-r-lg`}>
            #{String(id+1).padStart(4, '0')} {right.full_name}
            <ChevronRightIcon className="inline w-4 h-4" />
          </Link>
        )}
      </nav>
      <h1 className="page-header pb-4">
        {species.full_name}
      </h1>
      <PokemonTabs pokemonList={species.pokemon} />
      <PokemonPanels pokemonList={species.pokemon} />
    </div>
  );
}
