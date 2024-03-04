import type { Type } from "@prisma/client";
import type { TypeFull } from "@/lib/definitions";

import Link from "next/link"

import clsx from "clsx";


export default function TypeIcon({ type, shortened, link, className } : { type: TypeFull | Type, shortened?: boolean, link?: boolean, className?: string }) {
  const iconStyle = clsx(
    "flex justify-center items-center text-white text-xs border border-gray-400 rounded text-shadow",
    {
      "w-20 h-8 font-bold" : !shortened,
      "w-8 h-8 font-semibold" : !!shortened,
      "hover:opacity-80" : link,
    },
    {
      "bg-bug" : type.name === 'bug',
      "bg-dark" : type.name === 'dark',
      "bg-dragon" : type.name === 'dragon',
      "bg-electric" : type.name === 'electric',
      "bg-fairy" : type.name === 'fairy',
      "bg-fighting" : type.name === 'fighting',
      "bg-fire" : type.name === 'fire',
      "bg-flying" : type.name === 'flying',
      "bg-ghost" : type.name === 'ghost',
      "bg-grass" : type.name === 'grass',
      "bg-ground" : type.name === 'ground',
      "bg-ice" : type.name === 'ice',
      "bg-normal" : type.name === 'normal',
      "bg-poison" : type.name === 'poison',
      "bg-psychic" : type.name === 'psychic',
      "bg-rock" : type.name === 'rock',
      "bg-steel" : type.name === 'steel',
      "bg-water" : type.name === 'water',
    }
  )

  if (link) {
    return (
      <Link href={`/types/${type.name}`}>
        <div className={`${iconStyle} ${type.name} ${className}`}>
          {shortened ? type.name.slice(0, 3).toUpperCase() : type.name.toUpperCase()}
        </div>
      </Link>
    );
  }

  return (
    <div className={`${iconStyle} ${type.name} ${className}`}>
      {shortened ? type.name.slice(0, 3).toUpperCase() : type.name.toUpperCase()}
    </div>
  );
}