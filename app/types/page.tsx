import { Fragment } from "react";
import { fetchTypes } from "@/app/lib/data";
import TypeIcon from "@/app/ui/type/type-icon";

export default async function TypeList() {
  const types = await fetchTypes(); 

  return (
    <div className="flex flex-wrap">
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