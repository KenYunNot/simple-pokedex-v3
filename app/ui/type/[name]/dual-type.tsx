import { Type } from "@prisma/client";
import { Fragment } from "react";
import { fetchTypes } from "@/app/lib/data";
import { TypeFull } from "@/app/lib/definitions";
import { generateDTAChart } from "@/app/lib/utils";
import SectionHeader from "@/app/ui/section-header";
import TypeDamage from "@/app/ui/type/type-damage";
import TypeIcon from "@/app/ui/type/type-icon";

export default async function DualTypeAttack({ type } : { type: TypeFull}) {
  const types = await fetchTypes();
  const dtaChart = generateDTAChart(type, types);

  return (
    <div>
      <SectionHeader>Dual-type attack <span className="text-gray-600 italic">pros & cons</span></SectionHeader>
      <div className="w-fit">
        <table className="m-3 border border-collapse">
          <tbody>
            <tr className="flex">
              <th className="w-full"></th>
              {types.map((type) => {
                return (
                  <th key={type.name}><TypeIcon type={type} shortened={true} link={true} /></th>
                );
              })}
            </tr>
            {types.map((type) => {
              return (
                <Fragment key={type.name}>
                  <DTARow type={type} row={dtaChart[type.id]} />
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DTARow({
  type,
  row,
} : {
  type: Type,
  row: number[],
}) {
  
  return (
    <tr className="flex" key={`${type.name}-row`}>
      <th><TypeIcon type={type} link={true} /></th>
      {row.slice(1).map((num, index) => {
        return (
          <Fragment key={`${type.name}-index`}>
            <td>
              <TypeDamage damage={num} />
            </td>
          </Fragment>
        )
      })}
    </tr>
  )
}