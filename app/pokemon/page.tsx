import Link from "next/link";
import { fetchPokemon } from "@/app/lib/data";
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

  return (
    <main className="">
      <div className="grid grid-cols-4 gap-20 p-12">
        {pokemon.map((p) => {
          return (
            <Link href={`/pokemon/${p.pokemon_id}`} key={p.pokemon_id}>
              <div 
                className="relative flex flex-col items-center h-auto py-5 border-2 border-gray-300 rounded-lg
                  hover:bg-gray-300" >
                <header className="inline text-3xl font-bold">{p.name}</header>
                <div className="flex justify-center items-center absolute w-fit h-9 top-0 right-0 mt-4 mr-4 px-2 text-xl font-bold text-white bg-red-500 rounded-2xl">
                  {p.pokemon_id}
                </div>
                <img src={p.image_url} className="w-full h-auto p-8" />
                <div className="flex justify-center items-center w-full">
                  <div className={`type-icon ${p.type1}`}>{capitalize(p.type1)}</div>
                  {p.type2 && <div className={`type-icon ${p.type2}`}>{capitalize(p.type2)}</div>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}