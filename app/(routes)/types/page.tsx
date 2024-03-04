import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import TypeIcon from "@/lib/ui/type-icon";

import { fetchTypes } from "@/lib/data/types";


export default async function TypeList() {
  const types = await fetchTypes(); 

  return (
    <div className="grid grid-cols-3 gap-1 place-items-center p-3">
      {types.map((type) => {
        return (
          <Link key={type.name} href={`/types/${type.name}`}>
            <RoundTypeIcon name={type.name} />
          </Link>
        )
      })}
    </div>
  )
}

function RoundTypeIcon({ name } : { name: string }) {
  const iconStyle = clsx(
    "p-4 rounded-full duration-150 opacity-50 hover:opacity-100", 
    {
      "bg-bug" : name === 'bug',
      "bg-dark" : name === 'dark',
      "bg-dragon" : name === 'dragon',
      "bg-electric" : name === 'electric',
      "bg-fairy" : name === 'fairy',
      "bg-fighting" : name === 'fighting',
      "bg-fire" : name === 'fire',
      "bg-flying" : name === 'flying',
      "bg-ghost" : name === 'ghost',
      "bg-grass" : name === 'grass',
      "bg-ground" : name === 'ground',
      "bg-ice" : name === 'ice',
      "bg-normal" : name === 'normal',
      "bg-poison" : name === 'poison',
      "bg-psychic" : name === 'psychic',
      "bg-rock" : name === 'rock',
      "bg-steel" : name === 'steel',
      "bg-water" : name === 'water',
    }
  );

  return (
    <Image 
      src={`${name}.svg`}
      width={100}
      height={100}
      className={iconStyle}
      alt={`${name} type icon`}
    />
  )
}