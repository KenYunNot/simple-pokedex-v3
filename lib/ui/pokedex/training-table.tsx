import type { Pokemon } from "@/lib/types/pokemon";

import Section from "@/lib/ui/section";
import SectionHeader from "@/lib/ui/section/header";

import { capitalize } from "@/lib/utils";


export default function TrainingTable({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Section>
      <SectionHeader>Training Data</SectionHeader>
      <table className="data-table w-full text-base">
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