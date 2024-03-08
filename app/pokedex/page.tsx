import Link from "next/link";
import Search from "@/lib/ui/search";
import Pagination from "@/lib/ui/pagination";
import PokemonCard from "@/lib/ui/pokedex/pokemon-card";
import { 
  fetchPokemon,
  countPokemonPages, 
} from "@/lib/data/pokemon";

export default async function PokemonList({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  const pokemon = await fetchPokemon(query, page);
  const totalPages = await countPokemonPages(query);

  return (
    <div className="flex flex-col justify-center">
      <Search placeholder="Search pokemon..." />
      <div className="grid grid-cols-1 gap-8 pt-6
        xl:grid-cols-2 
        2xl:grid-cols-4 
      ">
        {pokemon.map((p) => {
          return (
            <Link href={`/pokedex/${p.name}`} key={p.id}>
              <PokemonCard pokemon={p} />
            </Link>
          );
        })}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}