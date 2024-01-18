import { Type } from "@prisma/client";
import { TypeFull } from "@/app/lib/definitions";
import clsx from "clsx";

export default function TypeIcon({ type, shortened, link, className } : { type: TypeFull | Type, shortened?: boolean, link?: boolean, className?: string }) {
  const iconStyle = clsx(
    "flex justify-center items-center text-white text-xs border border-gray-400 rounded text-shadow",
    {
      "w-20 h-8 font-bold" : shortened === false || shortened === undefined,
      "w-8 h-8 font-semibold" : shortened === true,
      "hover:opacity-80" : link === true,
    }
  )

  const iconText = shortened ? type.name.slice(0, 3).toUpperCase() : type.name.toUpperCase();
  const icon = <div className={`${iconStyle} ${type.name} ${className}`}>{iconText}</div>;

  if (link) {
    return (
      <a href={`/types/${type.name}`}>
        {icon}
      </a>
    );
  }

  return icon;
}