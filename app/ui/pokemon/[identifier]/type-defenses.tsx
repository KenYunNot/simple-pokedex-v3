import Section from "@/app/ui/pokemon/[identifier]/data-section";
import TypeIcon from "@/app/ui/pokemon/type-icon";
import { Pokemon } from "@/app/lib/definitions";
import { generateTypeDefenses, TYPES } from "@/app/lib/utils";
import clsx from "clsx";

export default async function TypeDefenses({ pokemon }: { pokemon: Pokemon }) {
  const type_defenses = generateTypeDefenses(pokemon.types);

  return (
    <Section header="Type defenses">
      <p>The effectiveness of each type on <span className="italic">{pokemon.species.full_name}</span></p>
      <div className="flex justify-center flex-wrap">
        <TypeTable start={0} end={TYPES.length/2} type_defenses={type_defenses} />
        <TypeTable start={TYPES.length/2} type_defenses={type_defenses} />
      </div>
    </Section>
  );
}

function TypeTable({
  start,
  end,
  type_defenses,
}: {
  start: number;
  end?: number;
  type_defenses: {[key: string] : number};
}) {
  if (!end) end = TYPES.length;

  return (
    <div className="flex mt-4">
      {TYPES.slice(start, end).map((type) => {
        let element: string | number;
        if (type_defenses[type] === 0.25) element = "\u00BC";
        else if (type_defenses[type] === 0.5) element = "\u00BD";
        else if (type_defenses[type] === 1) element = "";
        else element = type_defenses[type];
        let style = clsx(
          'text-yellow-400',
          {
            "bg-gray-900" : type_defenses[type] === 0,
            "bg-red-900" : type_defenses[type] === 0.25,
            "bg-red-600" : type_defenses[type] === 0.5,
            "bg-green-600" : type_defenses[type] === 2,
            "bg-green-900" : type_defenses[type] === 4,
          }
        )
        return (
          <div className="flex flex-col" key={type}>
            <TypeIcon type={type} shortened={true} />
            <div
              className={`flex justify-center items-center w-8 h-8 border ${style}`}
              key={type}
            >
              {element}
            </div>
          </div>
        );
      })}
    </div>
  );
}
