import type { Pokemon } from "@/lib/types/pokemon";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";
import TypeIcon from "@/lib/ui/type-icon";

import { capitalize, convertUnits } from "@/lib/utils";


export default function PokedexTable({ pokemon } : { pokemon : Pokemon }) {
  const [meters, feet, kilograms, pounds] = convertUnits(
    pokemon.height,
    pokemon.weight
  );

  return (
    <Section>
      <SectionHeader>Pokedex Data</SectionHeader>
      <table className="data-table w-full text-base">
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