import { notFound } from "next/navigation";
import { fetchTypeByName } from "@/app/lib/data";
import { capitalize } from "@/app/lib/utils";
import AttackDefense from "@/app/ui/type/[name]/attack-defense";
import DualTypeAttack from "@/app/ui/type/[name]/dual-type";
import PageHeader from "@/app/ui/page-header";

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
      <DualTypeAttack type={type} />
    </div>
  )
}