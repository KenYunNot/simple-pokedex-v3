import Section from "@/app/ui/pokemon/[identifier]/data-section";
import TypeIcon from "@/app/ui/pokemon/type-icon";
import { Pokemon } from "@/app/lib/definitions";
import { capitalize, convertUnits } from "@/app/lib/utils";

export default async function PokedexData({ pokemon } : { pokemon : Pokemon }) {
  const [meters, feet, kilograms, pounds] = convertUnits(
    pokemon.height,
    pokemon.weight
  );

  return (
    <Section header="Pokédex data">
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
                      <TypeIcon type={type.name} />
                    </div>
                  );
                })}
              </div>
            </td>
          </tr>
          <tr>
            <th>Genus</th>
            <td>{pokemon.species.genus}</td>
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
                if (num !== pokemon.abilities.length) {
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