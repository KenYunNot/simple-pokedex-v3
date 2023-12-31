import Section from "@/app/ui/data-section";
import { Pokemon } from "@/app/lib/definitions";

export default function BreedingData({ pokemon } : { pokemon : Pokemon }) {
  return (
    <Section header="Breeding">
      <table className="data-table">
        <tbody>
          <tr>
            <th>Egg Groups</th>
            <td>
              {pokemon.species.egg_groups.map((group, index) => {
                if (index === 0) {
                  return group;
                }
                return ", " + group;
              })}
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td><span id="male">{(1000 - (pokemon.species.gender_rate * 125)) / 10}% male</span>, <span id="female">{pokemon.species.gender_rate * 125 / 10}% female</span></td>
          </tr>
          <tr>
            <th>Egg Cycles</th>
            <td>{pokemon.species.egg_cycles} <span className="text-gray-500 text-xs">(about ~{pokemon.species.egg_cycles * 255} steps)</span></td>
          </tr>
        </tbody>
      </table>
    </Section>
  )
}