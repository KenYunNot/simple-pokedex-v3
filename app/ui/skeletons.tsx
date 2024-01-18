
export function PageHeaderSkeleton() {
  return <div className="w-80 h-14 bg-gray-200 rounded-md" />;
}

export function SectionHeaderSkeleton() {
  return <div className="w-72 h-10 my-3 bg-gray-200 rounded-md" />;
}

export function TypeIconSkeleton({ className } : { className?: string }) {
  return <div className={`w-20 h-8 bg-gray-200 rounded ${className ? className : ""}`} />;
}

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
        <TypeIconSkeleton className="mx-0.5" />
        <TypeIconSkeleton className="mx-0.5" />
      </div>
    </div>
  )
}

export function SpeciesPageSkeleton() {
  return (
    <div className="m-4">
      <div className="w-full table clear-both my-1 px-2">
        <div className="my-0.5 h-5 w-48 bg-gray-200 float-left rounded-md" />
        <div className="my-0.5 h-5 w-48 bg-gray-200 float-right rounded-md" />
      </div>
      <div className="flex justify-center pb-4 border-b">
        <PageHeaderSkeleton />
      </div>
    </div>
  )
}

export function SpeciesListPageSkeleton() {
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

function DTAChartRowSkeleton() {
  return (
    <div className="flex pt-px">
      <TypeIconSkeleton className="mt-px" />
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
      <div className="w-8 h-8 m-px border"></div>
    </div>
  )
}

export function TypePageSkeleton() {
  return (
    <div>
      <div className="w-full mb-7 flex justify-center">
        <PageHeaderSkeleton />
      </div>
      <div className="mt-8">
        <SectionHeaderSkeleton />
        <div className="w-96 h-4 mt-6 bg-gray-200 rounded-md" />
        <div className="flex m-3">
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
        </div>
        <div className="w-96 h-4 mt-6 bg-gray-200 rounded-md" />
        <div className="flex m-3">
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
        </div>
      </div>
      <div className="mt-8">
        <SectionHeaderSkeleton />
        <div className="w-96 h-4 mt-6 bg-gray-200 rounded-md" />
        <div className="flex m-3">
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
        </div>
        <div className="w-96 h-4 mt-6 bg-gray-200 rounded-md" />
        <div className="flex m-3">
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
          <TypeIconSkeleton className="mx-0.5" />
        </div>
      </div>
      <div className="mt-8">
        <SectionHeaderSkeleton />
        <div className="w-fit p-px border">
          <div className="flex">
            <div className="w-20 h-8" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
            <div className="w-8 h-8 m-px bg-gray-200 rounded" />
          </div>
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
          <DTAChartRowSkeleton />
        </div>
      </div>
    </div>
  )
}