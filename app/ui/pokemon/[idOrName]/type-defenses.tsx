import Section from "@/app/ui/pokemon/[idOrName]/data-section";
import TypeIcon from "@/app/ui/pokemon/type-icon";
import { Pokemon } from "@/app/lib/definitions";

export default async function TypeDefenses({ pokemon } : { pokemon: Pokemon }) {
  return (
    <Section header="Type defenses">
      <div>Type defenses</div>
    </Section>
  );
}