"use client";

import React from 'react'
import Image from 'next/image';
import Badge from './badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./shadcn/carousel"
import Autoplay from 'embla-carousel-autoplay';

const Hero = () => {
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
    <div className='relative flex flex-col gap-[6vh] w-full px-3 py-[8vh] bg-gradient-to-b from-pokeballred to-red-500 text-white'>
      <div className='flex flex-col gap-[2vh]'>
        <Badge className='mx-auto text-xs md:text-sm lg:text-md shadow-md border-none font-bold bg-yellow-500'>Introducing Simple Pokedex</Badge>
        <div className='flex flex-col gap-[1vh]'>
          <h1 className='mt-6 lg:mt-10 text-center text-4xl md:text-5xl lg:text-7xl font-semibold'>Pokemon made <span className='text-yellow-400 font-extrabold'>simple</span></h1>
          <p className='md:text-lg lg:text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <Carousel
        className='max-w-[1750px] mx-auto'
        opts={{
          loop: true,
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
              <CarouselItem className='flex justify-center md:basis-1/3 lg:basis-1/5'>
                <Image 
                  src={image_url}
                  width={500}
                  height={500}
                  alt={`Picture of ${name}`}
                  key={name}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero