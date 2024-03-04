import type { Type } from "@prisma/client";
import type { TypeWithRelations } from "@/lib/types/pokemon-types";

import { notFound } from "next/navigation";

import PageHeader from "@/lib/ui/page-header";
import SectionHeader from "@/lib/ui/section/header";
import DualTypeTable from "@/lib/ui/pokemon-types/dual-type-table";
import TypeIcon from "@/lib/ui/type-icon";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";

import { fetchTypeByName } from "@/lib/data/types";
import { capitalize } from "@/lib/utils";


export default async function Type({ params } : { params: { name: string }}) {
  const name = params.name;
  const type = await fetchTypeByName(name);
  
  // If the type is not found, redirect to not found page
  if (!type) {
    notFound();
  }

  return (
    <div>
      <PageHeader>
        {capitalize(type.name)} <span className="text-gray-500">(type)</span>
      </PageHeader>
      <AttackDefense type={type} />
      <DualTypeTable type={type} />
    </div>
  )
}


function AttackDefense({ type } : { type: TypeWithRelations}) {
  
  function buildTypeIconsList(damage_relation: Type[]) {
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
        <section>
          <p>
            <CheckCircleIcon className="inline w-5 h-5 mr-2 bg-green-500 text-white rounded-full" />
            <span className="italic">{capitalize(type.name)}</span> moves are super-effective against:
          </p>
          {buildTypeIconsList(type.double_damage_to)}
        </section>
      )}
      {type.half_damage_to.length > 0 && (
        <section>
          <p>
            <XCircleIcon className="inline w-5 h-5 mr-2 bg-red-500 text-white rounded-full" />
            <span className="italic">{capitalize(type.name)}</span> moves are not very effective against:
          </p>
          {buildTypeIconsList(type.half_damage_to)}
        </section>
      )}
      {type.no_damage_to.length > 0 && (
        <section>
          <p>
            <XCircleIcon className="inline w-5 h-5 mr-2 bg-red-500 text-white rounded-full" />
            <span className="italic">{capitalize(type.name)}</span> moves have no effect on:
          </p>
          {buildTypeIconsList(type.no_damage_to)}
        </section>
      )}
      
      <SectionHeader>Defense <span className="text-gray-600 italic">pros & cons</span></SectionHeader>
      {type.no_damage_from.length > 0 && (
        <section>
          <p>
            <CheckCircleIcon className="inline w-5 h-5 mr-2 bg-green-500 text-white rounded-full" />
            These types have no effect against <span className="italic">{capitalize(type.name)}</span> Pokémon:
          </p>
          {buildTypeIconsList(type.no_damage_from)}
        </section>
      )}
      {type.half_damage_from.length > 0 && (
        <section>
          
          <p>
            <CheckCircleIcon className="inline w-5 h-5 mr-2 bg-green-500 text-white rounded-full" />
            These types are not very effective against <span className="italic">{capitalize(type.name)}</span> Pokémon:
          </p>
          {buildTypeIconsList(type.half_damage_from)}
        </section>
      )}
      {type.double_damage_from.length > 0 && (
        <section>
          <p>
            <XCircleIcon className="inline w-5 h-5 mr-2 bg-red-500 text-white rounded-full" />
            These types are super effective against <span className="italic">{capitalize(type.name)}</span> Pokémon:
          </p>
          {buildTypeIconsList(type.double_damage_from)}
        </section>
      )}
    </div>
  )
}