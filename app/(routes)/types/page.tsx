import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import TypeIcon from "@/lib/ui/type-icon";

import { fetchTypes } from "@/lib/data/types";
import { capitalize } from "@/lib/utils";


export default async function TypeList() {
  const types = await fetchTypes(); 

  return (
    <main className="grid grid-cols-1 gap-10 place-items-center max-w-7xl mx-[auto] bg-white mt-4 py-6 px-4 \
      md:grid-cols-2
      xl:grid-cols-3">
      {types.map((type) => {
        return (
          <Link key={type.name} href={`/types/${type.name}`}>
            <SVGTypeIcon name={type.name} />
          </Link>
        )
      })}
    </main>
  )
}

function SVGTypeIcon({ name } : { name: string }) {
  const iconStyle = clsx(
    "flex flex-col justify-center items-center w-64 h-64 rounded-full duration-150 opacity-70 hover:opacity-100 \
      md:w-80 md:h-80", 
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
    <div className={iconStyle}>
      <Image 
        src={`${name}.svg`}
        width={130}
        height={130}
        alt={`${name} type icon`}
      />
      <p className="pt-8 text-3xl text-white text-center font-semibold">{capitalize(name)}</p>
    </div>
  )
}