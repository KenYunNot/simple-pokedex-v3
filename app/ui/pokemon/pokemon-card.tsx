import TypeIcon from "@/app/ui/pokemon/type-icon";
import { Pokemon } from "@/app/lib/definitions"

export default async function PokemonCard({ pokemon } : { pokemon : Pokemon }) {
  return (
    <div className="relative flex flex-col justify-between items-center py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-300" style={{height: '650px'}}>
      <div className="flex justify-between w-full px-3">
        <div className="inline px-2 text-2xl text-white font-bold bg-red-500 rounded-xl">{pokemon.id}</div>
        <p className="inline text-2xl font-bold">{pokemon.species.full_name}</p>
      </div>
      <img src={pokemon.image_url} className="p-8" />
      <div className="flex justify-center items-center w-full">
        {pokemon.types.map((type) => {
          return <TypeIcon type={type.name} />;
        })}
      </div>
    </div>
  );
}