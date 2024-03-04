"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { PokemonDetailed } from "@/lib/definitions";
import TypeIcon from "@/ui/type/type-icon";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import clsx from "clsx";

export default function Slider({
  pokemonList,
}: {
  pokemonList: PokemonDetailed[];
}) {
  const [highlighted, setHighlighted] = useState<number>(0);  // The index of the currently highlighted Pokemon

  /* Changes the highlighted Pokemon to the left */
  function moveLeft() {
    setHighlighted((highlighted + 9) % 10);
  }

  /* Changes the highlighted Pokemon to the right */
  function moveRight() {
    setHighlighted((highlighted + 1) % 10);
  }

  const translate = -1 * (highlighted * 256 + 896);  // Calculate the translation in pixels (account for the cloned Pokemon)
  
  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={moveLeft}><ChevronLeftIcon /></button>
      <button className="slider-button right" onClick={moveRight}><ChevronRightIcon /></button>
      <ul
        className="slider"
        style={{
          transform: `translate(${translate}px)`,
        }}
      >
        {pokemonList.slice(pokemonList.length/2).map((pokemon) => {
          return (
            <Fragment key={pokemon.id}>
              <CarouselItem
                pokemon={pokemon}
                highlighted={false}
                clone={true}
              />
            </Fragment>
          );
        })}
        {pokemonList.map((pokemon, index) => {
          return (
            <Fragment key={pokemon.id}>
              <CarouselItem
                pokemon={pokemon}
                highlighted={index === highlighted}
              />
            </Fragment>
          );
        })}
        {pokemonList.slice(0, pokemonList.length/2).map((pokemon) => {
          return (
            <Fragment key={pokemon.id}>
              <CarouselItem
                pokemon={pokemon}
                highlighted={false}
                clone={true}
              />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
}

function CarouselItem({
  pokemon,
  highlighted,
  clone,
}: {
  pokemon: PokemonDetailed;
  highlighted: boolean;
  clone?: boolean,
}) {
  return (
    <Link className="h-fit" href={`/pokedex/${pokemon.name}`}>
      <li 
        className={clsx("border-r-4 border-gray-800 slider-item duration-200 hover:opacity-90", {
          "w-64 h-96 border-b-4" : !highlighted,
          "w-96 rounded-br-md" : highlighted,
          "clone" : clone,
        })} 
        key={pokemon.id}
      >
        <div className="relative">
          <p className="absolute w-full h-64 pt-10 text-8xl text-gray-600 text-center font-semibold opacity-30">
            {pokemon.id}
          </p>
          <Image
            className="bg-gray-300 z-0"
            src={pokemon.image_url}
            width={475}
            height={475}
            alt={`Image of ${pokemon.form_name}`}
          />
        </div>
        <div
          className={clsx("px-4 py-6 bg-gray-700", {
            "h-44 rounded-bl-md": highlighted,
            "h-32" : !highlighted,
          })}
        >
          <p className="text-2xl text-white font-semibold">
            {pokemon.species.full_name}
          </p>
          {highlighted && (
            <dl className="mt-3">
              <dt className="w-24 mb-3 float-left text-lg text-white font-semibold">Type</dt>
              <dd className="flex mb-3">
                {pokemon.types.map((type) => {
                  return (
                    <Fragment key={type.id}>
                      <TypeIcon className="mx-0.5" type={type} />
                    </Fragment>
                  );
                })}
              </dd>

              <dt className="w-24 mb-3 float-left text-lg text-white font-semibold">Genus</dt>
              <dd className="mb-3 text-lg text-white">{pokemon.species.genus}</dd>
            </dl>
          )}
        </div>
      </li>
    </Link>
  );
}
