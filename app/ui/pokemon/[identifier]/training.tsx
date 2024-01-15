import { Pokemon } from "@/app/lib/definitions";
import { capitalize } from "@/app/lib/utils";
import Section from "@/app/ui/section";
import SectionHeader from "@/app/ui/section-header";

export default function TrainingData({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Section>
      <SectionHeader>Training Data</SectionHeader>
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
