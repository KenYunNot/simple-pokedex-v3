import Link from "next/link";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { 
  fetchPokemon,
  countPokemonPages, 
} from "@/app/lib/data";
import { capitalize } from "@/app/lib/utils";

export default async function Home({
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
      <div className="grid grid-cols-1 gap-20 pt-6
        xl:grid-cols-2 
        2xl:grid-cols-4 
      ">
        {pokemon.map((p) => {
          return (
            <Link href={`/pokemon/${p.pokemon_id}`} key={p.pokemon_id}>
              <div className="relative flex flex-col justify-between items-center py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-300" style={{height: '650px'}}>
                <div className="flex justify-between w-full px-3">
                  <div className="inline px-2 text-2xl text-white font-bold bg-red-500 rounded-xl">{p.pokemon_id}</div>
                  <p className="inline text-2xl font-bold">{p.full_name}</p>
                </div>
                <img src={p.image_url} className="p-8" />
                <div className="flex justify-center items-center w-full">
                  <div className={`type-icon ${p.type1}`}>{p.type1.toUpperCase()}</div>
                  {p.type2 && <div className={`type-icon ${p.type2}`}>{p.type2.toUpperCase()}</div>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}