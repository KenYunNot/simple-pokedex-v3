"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ui/shadcn/carousel"
import Autoplay from 'embla-carousel-autoplay';

const PokemonCarousel = () => {
  const pokemonImages = {
    bulbasaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    ivysaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    venusaur: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    charmander: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    charmeleon: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    charizard: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    squirtle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    wartortle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    blastoise: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
  }

  return (
    <Carousel
      className='w-[70%] mx-auto'
      opts={{
        align: 'start',
        loop: true,
        slidesToScroll: 1,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {Object.entries(pokemonImages).map(([name, image_url]) => {
          return (
            <CarouselItem key={name} className='flex justify-center md:basis-1/3'>
              <Link href={`/pokemon/${name}`}>
                <Image 
                  className='hover:animate-swell'
                  src={image_url}
                  width={500}
                  height={500}
                  alt={name}
                  key={name}
                />
              </Link>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

export default React.memo(PokemonCarousel)