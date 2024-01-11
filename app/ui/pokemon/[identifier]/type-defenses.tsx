import { Type } from "@prisma/client";
import { fetchTypes } from "@/app/lib/data";
import { Pokemon } from "@/app/lib/definitions";
import { generateTypeDefenses } from "@/app/lib/utils";
import Section from "@/app/ui/data-section";
import TypeIcon from "@/app/ui/type/type-icon";
import TypeDamage from "@/app/ui/type/type-damage";

export default async function TypeDefenses({ pokemon }: { pokemon: Pokemon }) {
  const types = await fetchTypes();
  const type_defenses = generateTypeDefenses(pokemon.types, types);

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
  type_defenses: number[];
}) {
  if (!end) end = types.length;

  return (
    <div className="flex mt-4">
      {types.slice(start, end).map((type) => {
        return (
          <div className="flex flex-col" key={type.name}>
            <TypeIcon type={type} shortened={true} link={true} />
            <TypeDamage damage={type_defenses[type.id]} />
          </div>
        );
      })}
    </div>
  );
}
