import { fetchRandomPokemon } from "@/app/lib/data";
import Slider from "@/app/ui/(home)/slider";

export default async function Home() {
  const featuredPokemon = await fetchRandomPokemon();

  return (
    <div>
      <Slider pokemonList={featuredPokemon} />
    </div>
  )
}
