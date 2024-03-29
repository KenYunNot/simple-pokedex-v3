import dynamic from "next/dynamic";

const BentoGrid = dynamic(() => import("@/lib/ui/bento-grid"));
const PokemonSlider = dynamic(() => import("@/lib/ui/slider"));


export default async function Home() {

  return (
    <main className="h-full">
      <section className="h-screen bg-gradient-to-b from-red-500 to-red-600">
        <div className="flex flex-col justify-center items-center w-full h-full text-white">
          <h1 className="pb-5 text-3xl text-center font-semibold md:pb-10 md:text-[45px] 2xl:pb-16 2xl:text-8xl">Welcome to Simple Pokedex v3!</h1>
          <p className="md:text-xl 2xl:text-4xl">The simplest solution for Pokemon data</p>
        </div>
      </section>
      <section className="max-w-[1500px] mx-[auto] my-4 py-6 md:my-8 md:p-8 bg-white rounded-lg">
        <div className="mb-20 px-4 md:p-0">
          <h2 className="text-2xl md:text-4xl font-bold pb-6">About the page</h2>
          <BentoGrid />
        </div>
        <div className="mb-20">
          <h2 className="pl-4 text-2xl md:text-4xl font-bold pb-6">Featured Pokemon</h2>
          <PokemonSlider />
        </div>
      </section>  
    </main>
  );
}


