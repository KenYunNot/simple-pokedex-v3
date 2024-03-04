import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPokemonByName } from "@/lib/data/pokemon";
import PageHeader from "@/lib/ui/page-header";
import PokemonPanels from "@/lib/ui/pokedex/pokemon-panels";
import PokemonTabs from "@/lib/ui/pokedex/pokemon-tabs";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
} from '@heroicons/react/24/outline';

export default async function Pokemon({ params }: { params: { name: string } }) {
  const name = params.name;
  const pokemon = await fetchPokemonByName(name);

  // If the Pokemon species is not found, redirect to not found page
  if (!pokemon) {
    notFound();
  }

  const linkStyle = "flex px-1 items-center text-blue-700 hover:bg-gray-300"

  return (
    <div className="m-4">
      <nav className="w-full table clear-both my-1 px-2">
        {species.left_full_name && (
          <Link href={`/pokemon/${species.left_name}`} className={`${linkStyle} float-left rounded-l-lg`}>
            <ChevronLeftIcon className="inline w-4 h-4" />
            #{String(id-1).padStart(4, '0')} {species.left_full_name}
          </Link>
        )}
        {species.right_full_name && (
          <Link href={`/pokemon/${species.right_name}`} className={`${linkStyle} float-right rounded-r-lg`}>
            #{String(id+1).padStart(4, '0')} {species.right_full_name}
            <ChevronRightIcon className="inline w-4 h-4" />
          </Link>
        )}
      </nav>
      <PageHeader>
        {species.full_name}
      </PageHeader>
      <PokemonTabs pokemonList={species.pokemon} />
      <PokemonPanels pokemonList={species.pokemon} />
    </div>
  );
}
