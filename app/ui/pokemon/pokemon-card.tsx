import Image from "next/image";
import TypeIcon from "@/app/ui/type/type-icon";
import { PokemonDetailed } from "@/app/lib/definitions"

export default async function PokemonCard({ pokemon } : { pokemon : PokemonDetailed }) {
  return (
    <div className="flex flex-col items-center h-min py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-300">
      <div className="flex justify-between w-full px-3">
        <div className="inline px-2 text-2xl text-white font-bold bg-red-500 rounded-xl">{pokemon.id}</div>
        <p className="inline text-2xl font-bold">{pokemon.species.full_name}</p>
      </div>
      <Image 
        src={pokemon.image_url}
        className="p-4"
        width={475}
        height={475}
        alt={`Image of ${pokemon.name}`}
      />
      <div className="flex justify-center items-center w-full">
        {pokemon.types.map((type) => {
          return (
            <div key={type.name}>
              <TypeIcon className="mx-0.5" type={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}