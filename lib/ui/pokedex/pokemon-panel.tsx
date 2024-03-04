import type { Type } from "@prisma/client";
import type { Pokemon } from "@/lib/types/pokemon";

import Image from "next/image";
import clsx from "clsx";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";
import TypeIcon from "@/lib/ui/type-icon";
import TypeDamage from "@/lib/ui/pokemon-types/type-damage";

import { capitalize, convertUnits, generateTypeDefenses } from "@/lib/utils";
import { fetchTypes } from "@/lib/data/types";


export default function PokemonPanel({
  pokemon,
}: {
  pokemon: Pokemon;
}) {
  return (
    <div>
      <Image
        src={pokemon.image_url}
        width={475}
        height={475}
        alt={`Image of ${pokemon.name}`}
      />
      <PokedexData pokemon={pokemon} />
      <TrainingData pokemon={pokemon} />
      <BreedingData pokemon={pokemon} />
      <TypeDefenses pokemon={pokemon} />
    </div>
  );
}


function PokedexData({ pokemon } : { pokemon : Pokemon }) {
  const [meters, feet, kilograms, pounds] = convertUnits(
    pokemon.height,
    pokemon.weight
  );

  return (
    <Section>
      <SectionHeader>Pokedex Data</SectionHeader>
      <table className="data-table">
        <tbody>
          <tr>
            <th>National No.</th>
            <td>{String(pokemon.id).padStart(4, "0")}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>
              <div className="flex">
                {pokemon.types.map((type) => {
                  return (
                    <div key={type.name}>
                      <TypeIcon className="mx-0.5" type={type} link={true} />
                    </div>
                  );
                })}
              </div>
            </td>
          </tr>
          <tr>
            <th>Genus</th>
            <td>{pokemon.genus}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{meters} m ({feet})</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{kilograms} kg ({pounds} lbs)</td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td>
              {pokemon.abilities.map((ability, index) => {
                let num = index + 1;
                if (pokemon.abilities.length === 1 || num !== pokemon.abilities.length) {
                  return (
                    <p key={index}>
                      {num}. {capitalize(ability)}
                    </p>
                  );
                }
                return (
                  <p className="text-sm italic" key={index}>
                    {capitalize(ability)} (hidden)
                  </p>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}


function TrainingData({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Section>
      <SectionHeader>Training Data</SectionHeader>
      <table className="data-table">
        <tbody>
          <tr>
            <th>Catch rate</th>
            <td>{pokemon.capture_rate}</td>
          </tr>
          <tr>
            <th>Base friendship</th>
            <td>{pokemon.base_happiness}</td>
          </tr>
          <tr>
            <th>Growth rate</th>
            <td>{capitalize(pokemon.growth_rate)}</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}


function BreedingData({ pokemon } : { pokemon : Pokemon }) {
  return (
    <Section>
      <SectionHeader>Breeding Data</SectionHeader>
      <table className="data-table">
        <tbody>
          <tr>
            <th>Egg Groups</th>
            <td>
              {pokemon.egg_groups.map((group, index) => {
                if (index === 0) {
                  return group;
                }
                return ", " + group;
              })}
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td><span id="male">{(1000 - (pokemon.gender_rate * 125)) / 10}% male</span>, <span id="female">{pokemon.gender_rate * 125 / 10}% female</span></td>
          </tr>
          <tr>
            <th>Egg Cycles</th>
            <td>{pokemon.egg_cycles} <span className="text-gray-500 text-xs">(about ~{pokemon.egg_cycles * 255} steps)</span></td>
          </tr>
        </tbody>
      </table>
    </Section>
  )
}


async function TypeDefenses({ pokemon }: { pokemon: Pokemon }) {
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
