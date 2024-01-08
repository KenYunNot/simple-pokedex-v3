import { notFound } from "next/navigation";
import AttackDefense from "@/app/ui/type/[name]/attack-defense";
import { fetchTypeByName } from "@/app/lib/data";

export default async function Type({ params } : { params: { name: string }}) {
  const name = params.name;
  const type = await fetchTypeByName(name);
  
  // If the type is not found, redirect to not found page
  if (!type) {
    notFound();
  }

  return (
    <div>
      <AttackDefense type={type} />
    </div>
  )
}