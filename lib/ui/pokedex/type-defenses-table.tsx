import type { Type } from "@prisma/client";
import type { Pokemon } from "@/lib/types/pokemon";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";
import TypeIcon from "@/lib/ui/type-icon";
import TypeDamage from "@/lib/ui/pokemon-types/type-damage";

import { generateTypeDefenses } from "@/lib/utils";
import { fetchTypes } from "@/lib/data/types";


export default async function TypeDefensesTable({ pokemon }: { pokemon: Pokemon }) {
  const types = await fetchTypes();
  const type_defenses = generateTypeDefenses(pokemon.types, types);

  return (
    <Section>
      <SectionHeader>Type Defenses</SectionHeader>
      <p>
        The effectiveness of each type on
        <span className="italic">{" " + pokemon.full_name}</span>
      </p>
      <div className="flex justify-center flex-wrap">
        <SubTable types={types} type_defenses={type_defenses} start={0} end={types.length/2} />
        <SubTable types={types} type_defenses={type_defenses} start={types.length/2} />
      </div>
    </Section>
  );
}

function SubTable({
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