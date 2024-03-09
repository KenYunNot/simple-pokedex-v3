"use client";

import type { CardData } from "@/lib/types/pokemon";

import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

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
  const [translate, setTranslate] = useState(0);
    
  function applyOffset() {
    const listWidth = document.getElementById("slider-list")?.offsetWidth;
    const regularItemWidth = (document.getElementsByClassName("non-highlighted")[0] as HTMLElement).offsetWidth;
    const highlightedItemWidth = (document.getElementsByClassName("highlighted")[0] as HTMLElement).offsetWidth;

    if (!listWidth) return;
    const highlightedItemMidpoint = (regularItemWidth * Number(pokemonList.length/2)) + Number(highlightedItemWidth/2);
    const listMidpoint = Number(listWidth)/2;

    setTranslate((-1 * highlightedItemMidpoint) + listMidpoint - (highlighted * regularItemWidth));
  }
  const handleResize = useDebouncedCallback(applyOffset, 300)

  function moveHighlighted(direction: 'right' | 'left') {
    const newHighlightedIndex = direction === 'right' ? 
      (highlighted + 1) % pokemonList.length : 
      (highlighted + (pokemonList.length-1)) % pokemonList.length;
    setHighlighted(newHighlightedIndex);
  }

  useEffect(() => {
    applyOffset();
    addEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    applyOffset();
  }, [highlighted])

  return (
    <div id="slider-list" className="relative h-[512px] overflow-x-clip">
      <button className="absolute top-1/4 left-5 w-20 h-20 text-color-white bg-[#6B7280] opacity-70 rounded-lg z-10 hover:opacity-100" onClick={() => moveHighlighted('left')}><ChevronLeftIcon /></button>
      <ul
        className="flex w-[5120px] border-t-4 border-[#1F2937] duration-200"
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
      <button className="absolute top-1/4 right-5 w-20 h-20 text-color-white bg-[#6B7280] opacity-70 rounded-lg z-10 hover:opacity-100" onClick={() => moveHighlighted('right')}><ChevronRightIcon /></button>
    </div>
  );
}