import { Type } from "@/app/lib/definitions";
import { Type as SimpleType } from "@prisma/client";
import { capitalize } from "@/app/lib/utils";
import TypeIcon from "@/app/ui/type/type-icon";

export default function AttackDefense({ type } : { type: Type}) {
  
  function buildTypeIconsList(damage_relation: SimpleType[]) {
    return (
      <div className="flex flex-wrap m-3">
        {damage_relation.map((relation) => {
          return (
            <div key={relation.name}>
              <TypeIcon className="m-0.5" type={relation} link={true} />
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="flex flex-col">
      <h2 className="section-header">Attack <span className="text-gray-600 italic">pros & cons</span></h2>
      {type.double_damage_to.length > 0 && (
        <div>
          <p><span className="italic">{capitalize(type.name)}</span> moves are super-effective against:</p>
          {buildTypeIconsList(type.double_damage_to)}
        </div>
      )}
      {type.half_damage_to.length > 0 && (
        <div>
          <p><span className="italic">{capitalize(type.name)}</span> moves are not very effective against:</p>
          {buildTypeIconsList(type.half_damage_to)}
        </div>
      )}
      {type.no_damage_to.length > 0 && (
        <div>
          <p><span className="italic">{capitalize(type.name)}</span> moves have no effect on:</p>
          {buildTypeIconsList(type.no_damage_to)}
        </div>
      )}
      
      <h2 className="section-header">Defense <span className="text-gray-600 italic">pros & cons</span></h2>
      {type.no_damage_from.length > 0 && (
        <div>
          <p>These types have no effect against <span className="italic">{capitalize(type.name)}</span> Pokémon:</p>
          {buildTypeIconsList(type.no_damage_from)}
        </div>
      )}
      {type.half_damage_from.length > 0 && (
        <div>
          <p>These types are not very effective against <span className="italic">{capitalize(type.name)}</span> Pokémon:</p>
          {buildTypeIconsList(type.half_damage_from)}
        </div>
      )}
      {type.double_damage_from.length > 0 && (
        <div>
          <p>These types are super effective against <span className="italic">{capitalize(type.name)}</span> Pokémon:</p>
          {buildTypeIconsList(type.double_damage_from)}
        </div>
      )}
    </div>
  )
}