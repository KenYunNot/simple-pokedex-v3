import { Type } from "@prisma/client";
import type { TypeWithRelations } from "./pokemon-types";

export type CardData = {
  id: number;
  name: string;
  full_name: string;
  image_url: string;
  types: Type[];
};

export type Pokemon = {
  id: number;
  name: string;
  abilities: string[];
  image_url: string;
  full_name: string;
  height: number,
  weight: number,
  left: { name: string; full_name: string } | null;
  right: { name: string; full_name: string } | null;
  base_happiness: number,
  capture_rate: number,
  egg_cycles: number,
  egg_groups: string[],
  growth_rate: string,
  flavor_texts: string[], 
  gender_rate: number,
  genus: string | null,
  is_legendary: boolean,
  is_mythical: boolean,
  types: TypeWithRelations[],
};
