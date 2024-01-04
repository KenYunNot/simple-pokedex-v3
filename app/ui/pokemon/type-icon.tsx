import clsx from "clsx";

export default function TypeIcon({ type, shortened } : { type: string, shortened?: boolean }) {
  const iconType = clsx({
    "w-20 h-8 mx-1 font-bold" : shortened === false || shortened === undefined,
    "w-8 h-8 font-semibold" : shortened === true,
  })

  const iconText = shortened ? type.slice(0, 3).toUpperCase() : type.toUpperCase();

  return (
    <div className={`flex justify-center items-center text-white text-xs border border-gray-400 rounded-md text-shadow ${iconType} ${type}`}>{iconText}</div>
  );
}