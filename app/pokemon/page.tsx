import Link from "next/link";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import PokemonCard from "@/app/ui/pokemon/pokemon-card";
import { 
  fetchPokemon,
  countPokemonPages, 
} from "@/app/lib/data";

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
    <div className="flex flex-col justify-center p-12 pt-6">
      <Search placeholder="Search pokemon..." />
      <div className="grid grid-cols-1 gap-8 pt-6
        xl:grid-cols-2 
        2xl:grid-cols-4 
      ">
        {pokemon.map((p) => {
          return (
            <Link href={`/pokemon/${p.id}`} key={p.id}>
              <PokemonCard pokemon={p} />
            </Link>
          );
        })}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}