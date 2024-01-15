import { PokemonCardSkeleton } from "../ui/skeletons"

export default function Skeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 pt-6
      xl:grid-cols-2 
      2xl:grid-cols-4 
    ">
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
      <PokemonCardSkeleton />
    </div>
  )
}