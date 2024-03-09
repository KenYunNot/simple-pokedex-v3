"use client";

import type { CardData } from "@/lib/types/pokemon";

import { Fragment } from "react";
import { useState } from "react";

import SliderItem from "@/lib/ui/slider/slider-item";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
} from '@heroicons/react/24/outline';


export default function SliderList({
  pokemonList,
}: {
  pokemonList: CardData[];
}) {
  const [highlighted, setHighlighted] = useState<number>(0);  // The index of the currently highlighted Pokemon

  /* Changes the highlighted Pokemon to the left */
  function moveLeft() {
    setHighlighted((highlighted + (pokemonList.length-1)) % pokemonList.length);
  }

  /* Changes the highlighted Pokemon to the right */
  function moveRight() {
    setHighlighted((highlighted + 1) % pokemonList.length);
  }

  const translate = -1 * (highlighted * 256 + 896);  // Calculate the translation in pixels (account for the cloned Pokemon)

  return (
    <div className="relative h-[560px] overflow-x-clip">
      <button className="absolute top-1/4 left-5 w-20 h-20 text-color-white bg-[#6B7280] opacity-70 rounded-lg z-10 hover:opacity-100" onClick={moveLeft}><ChevronLeftIcon /></button>
      <button className="absolute top-1/4 right-5 w-20 h-20 text-color-white bg-[#6B7280] opacity-70 rounded-lg z-10 hover:opacity-100" onClick={moveRight}><ChevronRightIcon /></button>
      <ul
        className="flex w-[7000px] border-t-4 border-[#1F2937] duration-200"
        style={{
          transform: `translate(${translate}px)`,
        }}
      >
        {pokemonList.slice(pokemonList.length/2).map((pokemon) => {
          return (
            <Fragment key={pokemon.id}>
              <SliderItem
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
              <SliderItem
                pokemon={pokemon}
                highlighted={index === highlighted}
              />
            </Fragment>
          );
        })}
        {pokemonList.slice(0, pokemonList.length/2).map((pokemon) => {
          return (
            <Fragment key={pokemon.id}>
              <SliderItem
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