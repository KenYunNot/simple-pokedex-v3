import Link from "next/link";
import { notFound } from "next/navigation";
import PokemonTabs from "@/app/ui/pokemon/[identifier]/pokemon-tabs";
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

  const linkStyle = "flex px-1 items-center text-blue-700 hover:bg-gray-300"

  return (
    <div className="m-4">
      <nav className="w-full table clear-both my-1 px-2">
        {left && (
          <Link href={`/pokemon/${id-1}`} className={`${linkStyle} float-left rounded-l-lg`}>
            <ChevronLeftIcon className="inline w-4 h-4" />
            #{String(id-1).padStart(4, '0')} {left}
          </Link>
        )}
        {right && (
          <Link href={`/pokemon/${id+1}`} className={`${linkStyle} float-right rounded-r-lg`}>
            #{String(id+1).padStart(4, '0')} {right}
            <ChevronRightIcon className="inline w-4 h-4" />
          </Link>
        )}
      </nav>
      <h1 className="pb-4 text-3xl text-center font-semibold">
        {species.full_name}
      </h1>
      <PokemonTabs pokemonList={species.pokemon} />
    </div>
  );
}
