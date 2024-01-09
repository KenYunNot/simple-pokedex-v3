"use client";

import { Pokemon } from "@/app/lib/definitions";
import clsx from "clsx";

export default function PokemonTabs({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  
  function setActiveTab(pokemonName: string) {
    let active = document.getElementsByClassName('active');
    let toggle = document.getElementsByClassName(pokemonName);
    for (let i = 0; i < active.length; i++) {
      active[i].classList.remove('active');
      toggle[i].classList.add('active');
    }
  }

  return (
    <div className="flex border-b border-gray-500">
      {pokemonList.length > 1 && pokemonList.map((pokemon, index) => {
        let name = pokemon.form_name ? pokemon.form_name : pokemon.species.full_name;
        return (
          <div 
            className={`pokemon-tab ${pokemon.name} ${index === 0 ? 'active' : ''}`}
            key={pokemon.id}
            onClick={() => {setActiveTab(pokemon.name)}}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}