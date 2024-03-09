import type { Pokemon } from "@/lib/types/pokemon";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";


export default function BreedingTable({ pokemon } : { pokemon : Pokemon }) {
  return (
    <Section>
      <SectionHeader>Breeding Data</SectionHeader>
      <table className="w-full text-base">
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