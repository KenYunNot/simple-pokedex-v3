import { Type as SimpleType } from "@prisma/client";
import { Fragment } from "react";
import { Type } from "@/app/lib/definitions";
import { fetchTypes } from "@/app/lib/data";
import { generateDTAChart } from "@/app/lib/utils";
import TypeIcon from "@/app/ui/type/type-icon";
import TypeDamage from "@/app/ui/type/type-damage";

export default async function DualTypeAttack({ type } : { type: Type}) {
  const types = await fetchTypes();
  const dtaChart = generateDTAChart(type, types);

  return (
    <div>
      <h2 className="section-header">Dual-type attack <span className="text-gray-600 italic">pros & cons</span></h2>
      <div className="overflow-x-scroll">
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
  type: SimpleType,
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