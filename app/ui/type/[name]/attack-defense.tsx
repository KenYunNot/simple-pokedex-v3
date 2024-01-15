import { Type } from "@/app/lib/definitions";
import { Type as SimpleType } from "@prisma/client";
import { capitalize } from "@/app/lib/utils";
import SectionHeader from "@/app/ui/section-header";
import TypeIcon from "@/app/ui/type/type-icon";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

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
      <SectionHeader>Attack <span className="text-gray-600 italic">pros & cons</span></SectionHeader>
      {type.double_damage_to.length > 0 && (
        <div>
          <CheckCircleIcon className="w-5 h-5 bg-green-500 text-white rounded-full" />
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
      
      <SectionHeader>Defense <span className="text-gray-600 italic">pros & cons</span></SectionHeader>
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