import React from 'react';
import Badge from '@/ui/badge';
import PokemonCarousel from '@/ui/pokemon/carousel';


export default function Home() {
  return (
    <main className="">
      <div className='relative flex flex-col gap-[6vh] w-full px-3 py-[8vh] bg-gradient-to-b from-pokeballred to-red-500 text-white'>
        <div className='flex flex-col gap-[2vh]'>
          <Badge className='mx-auto text-xs md:text-sm lg:text-md shadow-md border-none font-bold bg-yellow-500'>Introducing Simple Pokedex</Badge>
          <div className='flex flex-col gap-[1vh] lg:gap-[3vh]'>
            <h1 className='mt-6 lg:mt-10 text-center text-4xl md:text-5xl lg:text-7xl font-semibold'>Pokemon made <span className='text-yellow-400 font-extrabold'>simple</span></h1>
            <p className='text-center italic md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <PokemonCarousel />
      </div>
    </main>
  );
}
