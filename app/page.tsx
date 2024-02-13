import { fetchRandomPokemon } from "@/lib/data";
import Slider from "@/ui/slider";
import Link from "next/link";

export default async function Home() {
  // const featuredPokemon = await fetchRandomPokemon();

  return (
    <div className="py-3">
      <h1 className="w-full text-4xl font-bold text-center pb-3">
        Welcome to Simple Pokedex v3!
      </h1>
      <div className="bg-gray-200 p-4 rounded-lg text-lg mt-3 mb-8">
        <p>
          Find out more about your favorite Pokemon and explore what makes them
          powerful!
        </p>
        <br />
        <p>
          This webpage was built with Next.js App Router, TypeScript, Tailwind
          CSS, and Prisma!
        </p>
        <br />
        <p>
          Link to my GitHub{" "}
          <Link
            href="https://github.com/KenYunNot"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            here
          </Link>
          !
        </p>
      </div>
      <h2 className="text-3xl font-bold pb-5">Featured Pokemon</h2>
      {/* <Slider pokemonList={featuredPokemon} /> */}
    </div>
  );
}
