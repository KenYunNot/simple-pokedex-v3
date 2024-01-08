import { Type } from "@prisma/client";
import { fetchTypes } from "@/app/lib/data";
import { Pokemon } from "@/app/lib/definitions";
import { generateTypeDefenses } from "@/app/lib/utils";
import Section from "@/app/ui/pokemon/[identifier]/data-section";
import TypeIcon from "@/app/ui/type-icon";
import clsx from "clsx";

export default async function TypeDefenses({ pokemon }: { pokemon: Pokemon }) {
  const type_defenses = generateTypeDefenses(pokemon.types);
  const types = await fetchTypes();

  return (
    <Section header="Type defenses">
      <p>
        The effectiveness of each type on{" "}
        <span className="italic">{pokemon.species.full_name}</span>
      </p>
      <div className="flex justify-center flex-wrap">
        <TypeTable types={types} type_defenses={type_defenses} start={0} end={types.length/2} />
        <TypeTable types={types} type_defenses={type_defenses} start={types.length/2} />
      </div>
    </Section>
  );
}

function TypeTable({
  start,
  end,
  types,
  type_defenses,
}: {
  start: number,
  end?: number,
  types: Type[];
  type_defenses: { [key: string]: number };
}) {
  if (!end) end = types.length;

  return (
    <div className="flex mt-4">
      {types.slice(start, end).map((type) => {
        let element: string | number;
        if (type_defenses[type.name] === 0.25) element = "\u00BC";
        else if (type_defenses[type.name] === 0.5) element = "\u00BD";
        else if (type_defenses[type.name] === 1) element = "";
        else element = type_defenses[type.name];
        let style = clsx("text-yellow-400", {
          "bg-gray-900": type_defenses[type.name] === 0,
          "bg-red-900": type_defenses[type.name] === 0.25,
          "bg-red-600": type_defenses[type.name] === 0.5,
          "bg-green-600": type_defenses[type.name] === 2,
          "bg-green-900": type_defenses[type.name] === 4,
        });
        return (
          <div className="flex flex-col" key={type.name}>
            <TypeIcon type={type} shortened={true} />
            <div
              className={`flex justify-center items-center w-8 h-8 border ${style}`}
              key={type.name}
            >
              {element}
            </div>
          </div>
        );
      })}
    </div>
  );
}
