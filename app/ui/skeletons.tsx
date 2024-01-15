import Image from "next/image";

export function PokemonCardSkeleton() {
  return (
    <div className="flex flex-col justify-center items-center py-3 border border-gray-200 rounded-lg">
      <div className="flex justify-between w-full px-3">
        <div className="w-10 h-8 px-2 bg-gray-200 rounded-xl" />
        <div className="w-48 h-8 bg-gray-200 rounded-md" />
      </div>
      <div className="flex justify-center p-4 w-full">
        <div className="w-full h-full bg-gray-200 rounded-xl" style={{maxWidth: 475, minHeight: 350}} />
      </div>
      <div className="flex">
        <div className="mx-0.5 h-8 w-20 bg-gray-200 rounded" />
        <div className="mx-0.5 h-8 w-20 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

export function PokemonSpeciesSkeleton() {
  return (
    <div className="m-4">
      <div className="flex justify-between w-full my-1 px-2">
        <div className="h-5 w-48 bg-gray-200 rounded-md" />
        <div className="h-5 w-48 bg-gray-200 rounded-md" />
      </div>
      <div className="flex justify-center pb-4 border-b">
        <div className="h-14 w-80 bg-gray-200 rounded-md" />
      </div>
    </div>
  )
}

export function PokemonSpeciesListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 py-6
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