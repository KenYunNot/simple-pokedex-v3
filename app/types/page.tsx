import { Fragment } from "react";
import { fetchTypes } from "@/lib/data";
import TypeIcon from "@/ui/type/type-icon";

export default async function TypeList() {
  const types = await fetchTypes(); 

  return (
    <div className="grid grid-cols-3 gap-1 place-items-center p-3">
      {types.map((type) => {
        return (
          <Fragment key={type.name}>
            <TypeIcon type={type} link={true} />
          </Fragment>
        )
      })}
    </div>
  )
}