import { memo } from "react";

import SliderList from "@/lib/ui/slider/slider-list";

import { fetchRandomPokemon } from "@/lib/data/pokemon";


async function Slider() {
  const randomPokemon = await fetchRandomPokemon();

  return (
    <SliderList pokemonList={randomPokemon} />
  )
}

export default memo(Slider);