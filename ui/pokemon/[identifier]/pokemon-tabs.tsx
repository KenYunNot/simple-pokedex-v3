"use client";

import { useState } from "react";
import { PokemonFull } from "@/lib/definitions";
import clsx from "clsx";

export default function PokemonTabs({
  pokemonList,
}: {
  pokemonList: PokemonFull[];
}) {
  const [activeTab, setActiveTab] = useState<number>(0);

  function changePanel(id: number, tab: number) {
    let oldPanel = document.getElementById(`panel-${activeTab}`);
    let newPanel = document.getElementById(`panel-${tab}`);
    oldPanel?.classList.add("hidden");
    newPanel?.classList.remove("hidden");
    setActiveTab(tab);
  }

  const divStyle = clsx(
    "flex flex-col border-b border-gray-500",
    {
      "xs:flex-row" : pokemonList.length <= 3,
      "sm:flex-row" : pokemonList.length > 3,
    },
  )

  return (
    <div className={divStyle}>
      {pokemonList.length > 1 && pokemonList.map((pokemon, index) => {
        const tabStyle = clsx(
          "mx-1 -mb-px px-2 py-1 border border-gray-500 rounded-t-md text-center\
            hover:bg-gray-400",
          {
            "bg-white border-b-0 pointer-events-none" : index === activeTab,
            "bg-gray-300 cursor-pointer" : index !== activeTab,
          }
        )

        return (
          <div 
            className={tabStyle}
            key={pokemon.id}
            onClick={() => {changePanel(pokemon.id, index)}}
          >
            {pokemon.form_name}
          </div>
        );
      })}
    </div>
  );
}