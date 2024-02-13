import clsx from "clsx";

export default function TypeDamage({ damage } : { damage: number}) {
  let element: string | number;
  if (damage === 0.25) element = "\u00BC";
  else if (damage === 0.5) element = "\u00BD";
  else if (damage === -1 || damage === 1) element = "";
  else element = damage;
  const damageStyle = clsx("text-yellow-400", {
    "bg-gray-300" : damage === -1,
    "bg-gray-900": damage === 0,
    "bg-red-900": damage === 0.25,
    "bg-red-600": damage === 0.5,
    "bg-green-600": damage === 2,
    "bg-green-900": damage === 4,
  });

  return (
    <div className={`flex justify-center items-center w-8 h-8 border ${damageStyle}`}>
      {element}
    </div>
  )
}