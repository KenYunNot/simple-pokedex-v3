import Table from "@/app/ui/pokemon/table";
import { notFound } from "next/navigation";
import { fetchPokemonById } from "@/app/lib/data";

export default async function Pokemon({ params } : { params: { id: string }}) {
  const id = Number(params.id);

  const pokemon = await fetchPokemonById(id);

  if (!pokemon) {
    notFound();
  }

  return (
    <div className="m-3">
      <h1 className="pb-4 text-3xl text-center font-semibold border-b border-gray-300">{pokemon.species.full_name}</h1>
      <div>
        <img src={pokemon.image_url} />
        <Table header="Pokédex data" pokemon={pokemon} />
        <Table header="Training data" pokemon={pokemon} />
      </div>
    </div>
  )
}