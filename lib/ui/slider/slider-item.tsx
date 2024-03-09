import type { CardData } from "@/lib/types/pokemon";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import clsx from "clsx";

import TypeIcon from "@/lib/ui/type-icon";


export default function SliderItem({
  pokemon,
  highlighted,
  clone,
}: {
  pokemon: CardData;
  highlighted: boolean;
  clone?: boolean,
}) {
  return (
    <Link className="h-fit" href={`/pokedex/${pokemon.name}`}>
      <li 
        key={pokemon.id}
        className={clsx("border-r-4 border-gray-800 slider-item duration-200 hover:opacity-90", {
          "w-64 h-96 border-b-4 non-highlighted" : !highlighted,
          "w-80 rounded-br-md highlighted" : highlighted,
          "clone" : clone,
        })} 
      >
        <div className="relative">
          <p className="absolute w-full h-64 pt-10 text-8xl text-gray-600 text-center font-semibold opacity-30">
            {pokemon.id}
          </p>
          <Image
            className="bg-gray-300 z-0"
            src={pokemon.image_url}
            width={475}
            height={475}
            alt={`Image of ${pokemon.full_name}`}
          />
        </div>
        <div
          className={clsx("h-32 px-4 py-6 bg-gray-700", {
            "h-40 rounded-bl-md": highlighted,
          })}
        >
          <p className="text-2xl text-white font-semibold">
            {pokemon.full_name}
          </p>
          {highlighted && (
            <dl className="mt-3">
              <dt className="w-24 mb-3 float-left text-lg text-white font-semibold">Type</dt>
              <dd className="flex mb-3">
                {pokemon.types.map((type) => {
                  return (
                    <Fragment key={type.id}>
                      <TypeIcon className="mx-0.5" type={type} />
                    </Fragment>
                  );
                })}
              </dd>
            </dl>
          )}
        </div>
      </li>
    </Link>
  );
}