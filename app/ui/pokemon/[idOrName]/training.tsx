import Section from "@/app/ui/pokemon/[idOrName]/data-section";
import { Pokemon } from "@/app/lib/definitions";
import { capitalize } from "@/app/lib/utils";

export default function TrainingData({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Section header="Training data">
      <table className="data-table">
        <tbody>
          <tr>
            <th>Catch rate</th>
            <td>{pokemon.species.capture_rate}</td>
          </tr>
          <tr>
            <th>Base friendship</th>
            <td>{pokemon.species.base_happiness}</td>
          </tr>
          <tr>
            <th>Growth rate</th>
            <td>{capitalize(pokemon.species.growth_rate)}</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}