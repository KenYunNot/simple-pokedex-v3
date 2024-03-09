import type { Pokemon } from "@/lib/types/pokemon";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";


export default function BreedingTable({ pokemon } : { pokemon : Pokemon }) {
  /* 
    We need to safelist these Tailwind classes or else the dynamic class names (gender section) won't add the styles
    w-[0%] w-[12.5%] w-[25%] w-[37.5%] w-[50%] w-[62.5%] w-[75%] w-[87.5%] w-[100%] 
  */

  const femaleRate = pokemon.gender_rate * 12.5;
  const maleRate = 100 - femaleRate;

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
            <td>
              <span className={`w-[${maleRate}%] bg-blue-600`}>{maleRate}% male</span>
              {", "}
              <span className={`w-[${femaleRate}%] bg-pink-600`}>{femaleRate}% female</span></td>
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