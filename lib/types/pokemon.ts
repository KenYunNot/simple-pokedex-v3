import { Type } from "@prisma/client";

export type CardData = {
  id: number,
  name: string,
  full_name: string,
  image_url: string,
  types: Type[],
}