import { fetchRandomPokemon } from "@/lib/data";
import Slider from "@/ui/slider";

export default async function Home() {
  const featuredPokemon = await fetchRandomPokemon();

  return (
    <div className="py-3">
      <Slider pokemonList={featuredPokemon} />
    </div>
  )
}
