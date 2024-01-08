"use client";

import Image from "next/image";
import { useState } from "react";
import PokedexData from "@/app/ui/pokemon/[identifier]/pokedex";
import TrainingData from "@/app/ui/pokemon/[identifier]/training";
import TypeDefenses from "@/app/ui/pokemon/[identifier]/type-defenses";
import BreedingData from "@/app/ui/pokemon/[identifier]/breeding";
import { Pokemon } from "@/app/lib/definitions";
import clsx from "clsx";

export default function PokemonTabs({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  
  function setActiveTab(tabNumber: number) {
    let tabs = document.getElementsByClassName("pokemon-tab");
    let panels = document.getElementsByClassName("pokemon-panel");
    for (let i = 0; i < panels.length; i++) {
      if (!('hidden' in panels[i].classList)) {
        tabs[i].classList.remove('bg-white');
        tabs[i].classList.add('bg-gray-300', 'hover:bg-gray-400', 'hover:cursor-pointer');
        panels[i].classList.add('hidden');
      }
      if (i === tabNumber) {
        tabs[i].classList.remove('bg-gray-300', 'hover:bg-gray-400', 'hover:cursor-pointer');
        tabs[i].classList.add('bg-white');
        panels[i].classList.remove('hidden');
      }
    }
  }

  return (
    <div>
      <div className="flex border-b border-gray-500">
        {pokemonList.length > 1 && pokemonList.map((pokemon, index) => {
          let name = pokemon.form_name ? pokemon.form_name : pokemon.species.full_name;
          let tabStyle = clsx(
            "pokemon-tab mx-1 px-4 py-2 border border-gray-500 rounded-t-md move-down-1px",
            {
              "bg-white" : index === 0,
              "bg-gray-300 hover:bg-gray-400 hover:cursor-pointer" : index !== 0,
            }
          )
          return (
            <div 
              className={tabStyle}
              key={pokemon.id}
              onClick={() => {setActiveTab(index)}}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div>
        {pokemonList.map((pokemon, index) => {
          let panelStyle = clsx(
            "pokemon-panel",
            {
            "hidden" : index !== 0,
            }
          )
          return (
            <div className={panelStyle} key={pokemon.id}>
              <Image
                src={pokemon.image_url}
                width={475}
                height={475}
                alt={`Image of ${pokemon.name}`}
              />
              <PokedexData pokemon={pokemon} />
              <TrainingData pokemon={pokemon} />
              <BreedingData pokemon={pokemon} />
              <TypeDefenses pokemon={pokemon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
