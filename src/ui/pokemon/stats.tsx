import React from "react";
import { notFound } from "next/navigation";
import { getPokemonStats } from "@/lib/actions";
import { capitalize } from "@/lib/helpers";
import { match } from "ts-pattern";


const PokemonStats = async ({ nameOrId } : { nameOrId: string }) => {
  const pokemonStats = await getPokemonStats(nameOrId);

  if (!pokemonStats) {
    notFound();
  }

  return (
    <div className='mt-4 bg-gray-300 rounded-md px-5 py-3'>
      Stats
      <div className="flex gap-2">
        <StatBar name='hp' value={pokemonStats.hp} />
        <StatBar name='attack' value={pokemonStats.attack} />
        <StatBar name='defense' value={pokemonStats.defense} />
        <StatBar name='sp_attack' value={pokemonStats.sp_attack} />
        <StatBar name='sp_defense' value={pokemonStats.sp_defense} />
        <StatBar name='speed' value={pokemonStats.speed} />
      </div>
    </div>
  )
}


type Stats = 'hp' | 'attack'| 'defense' | 'sp_attack' | 'sp_defense' | 'speed';

const StatBar = ({ name, value } : { name: Stats, value: number }) => {
  const numFilled = Math.ceil(value / 16);

  return (
    <div className="basis-1/6 mt-6 mb-2">
      <div className="relative bg-white overflow-hidden">
        {Array(15).fill('').map((_, i) => <div key={i} className="relative h-[13px] border-b-[3px] border-gray-300 bg-transparent z-10" /> )}
        <div 
          className="absolute top-full w-full bg-sky-500 animate-delayed-fill" 
          style={{ 
            height: `${numFilled * 13}px`,
          }}
        />
      </div>
      <p className="text-xs text-center font-bold">
        {match(name)
          .with('hp', () => 'HP')
          .with('sp_attack', () => 'Special Attack')
          .with('sp_defense', () => 'Special Defense')
          .otherwise(name => capitalize(name))}
      </p>
    </div>
  )
}

export default React.memo(PokemonStats);