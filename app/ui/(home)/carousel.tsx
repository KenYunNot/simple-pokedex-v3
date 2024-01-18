import Image from "next/image";
import { Fragment } from "react";
import { fetchRandomPokemon } from "@/app/lib/data"
import { PokemonDetailed } from "@/app/lib/definitions";
import TypeIcon from "@/app/ui/type/type-icon";
import clsx from "clsx";

export default async function Carousel() {
  const randomPokemon = await fetchRandomPokemon();
  
  return (
    <ul className="flex justify-center">
      {randomPokemon.map((pokemon, index) => {
        if (index !== 0) {
          return (
            <Fragment key={pokemon.id}>
              <ShortenedCarouselItem pokemon={pokemon} />
            </Fragment>
          )
        }
        
      })}
    </ul>
  )
}

function CarouselItem({ pokemon } : { pokemon: PokemonDetailed }) {
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
            <Fragment key={type.id}>
              <TypeIcon type={type} />
            </Fragment>
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

function ShortenedCarouselItem({ pokemon } : { pokemon: PokemonDetailed }) {
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