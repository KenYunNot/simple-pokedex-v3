import TypeIcon from "./type-icon";
import { Pokemon } from "@/app/lib/definitions";
import { capitalize, convertUnits } from "@/app/lib/utils";

export default function Table({
  header,
  pokemon,
}: {
  header: string;
  pokemon: Pokemon;
}) {
  function getTable() {
    if (header === "Pokédex data")
      return <PokedexDataTable pokemon={pokemon} />;
    else if (header === "Training data")
      return <TrainingTable pokemon={pokemon} />;
    else return <></>;
  }

  return (
    <div className="m-6">
      <h2 className="text-2xl font-semibold">{header}</h2>
      <div className="mt-3">
        {getTable()}
      </div>
    </div>
  );
}

function PokedexDataTable({ pokemon }: { pokemon: Pokemon }) {
  const [meters, feet, kilograms, pounds] = convertUnits(
    pokemon.height,
    pokemon.weight
  );

  return (
    <table className="w-full">
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
  );
}

function TrainingTable({ pokemon }: { pokemon: Pokemon }) {
  return (
    <table className="w-full">
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
  );
}
