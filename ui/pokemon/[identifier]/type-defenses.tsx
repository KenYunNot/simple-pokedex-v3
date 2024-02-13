import { Type } from "@prisma/client";
import { fetchTypes } from "@/lib/data";
import { PokemonFull } from "@/lib/definitions";
import { generateTypeDefenses } from "@/lib/utils";
import Section from "@/ui/section";
import SectionHeader from "@/ui/section-header"
import TypeIcon from "@/ui/type/type-icon";
import TypeDamage from "@/ui/type/type-damage";

export default async function TypeDefenses({ pokemon }: { pokemon: PokemonFull }) {
  const types = await fetchTypes();
  const type_defenses = generateTypeDefenses(pokemon.types, types);

  return (
    <Section>
      <SectionHeader>Type Defenses</SectionHeader>
      <p>
        The effectiveness of each type on
        <span className="italic">{" " + pokemon.species.full_name}</span>
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
