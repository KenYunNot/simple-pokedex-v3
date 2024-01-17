import Image from "next/image";
import { fetchRandomPokemon } from "@/app/lib/data"
import { Pokemon } from "@/app/lib/definitions";
import TypeIcon from "@/app/ui/type/type-icon";
import clsx from "clsx";

export default async function Carousel() {
  const randomPokemon = await fetchRandomPokemon();
  
  return (
    <ul className="flex justify-center">
      {randomPokemon.map((pokemon, index) => {
        if (index !== 0) {
          return <ShortenedCarouselItem pokemon={pokemon} />
        }
        
      })}
    </ul>
  )
}

function CarouselItem({ pokemon } : { pokemon: Pokemon }) {
  return (
    <div className="w-64 h-64 active" key={pokemon.id}>
      <Image 
        src={pokemon.image_url}
        width={475}
        height={475}
        alt={`Image of ${pokemon.form_name}`}
      />
      <p>{pokemon.id}</p>
      <p>{pokemon.form_name}</p>
      <div className="flex">
        {pokemon.types.map((type) => {
          return (
            <TypeIcon type={type} />
          )
        })}
      </div>
      <dl>
        <dd>Hey</dd>
        <dt>Hi</dt>
      </dl>
    </div>
  );
}

function ShortenedCarouselItem({ pokemon } : { pokemon: Pokemon }) {
  return (
    <div className="w-52 h-52" key={pokemon.id}>
      <Image 
        src={pokemon.image_url}
        width={475}
        height={475}
        alt={`Image of ${pokemon.form_name}`}
      />
      <p>{pokemon.id}</p>
      <p>{pokemon.form_name}</p>
    </div>
  )
}