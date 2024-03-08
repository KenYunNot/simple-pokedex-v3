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