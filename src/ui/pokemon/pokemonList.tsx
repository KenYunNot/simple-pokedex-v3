import React from 'react'
import Link from 'next/link';
import TypeIcon from '../type-icon';
import { fetchPokemonPage } from '@/lib/actions';
import { capitalize } from '@/lib/helpers';
import type { Pokemon } from '@prisma/client';


const PokemonList = async ({
  page,
  query,
}: {
  page: number,
  query: string,
}) => {
  const pokemonList = await fetchPokemonPage(page, query);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4 max-w-7xl mx-auto'>
      {pokemonList.map(pokemon => {
        return (
          <React.Fragment key={pokemon.id}>
            <PokemonListCard pokemon={pokemon} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

const PokemonListCard = async ({
  pokemon,
} : {
  pokemon: Pokemon,
}) => {
  return (
    <div className='flex flex-col justify-center items-center rounded-md hover:animate-bounce'>
      <Link href={`/pokemon/${pokemon.name}`} className='hover:cursor-pointer'>
        <img src={pokemon.image_url} className='bg-gray-200 rounded-md' />
      </Link>
      <div className='w-full text-left pt-1 pl-3'>
        <p className='text-gray-400'>#{String(pokemon.id).padStart(4, '0')}</p>
        <p className='pt-1 font-bold text-lg sm:text-xl md:text-2xl'>{capitalize(pokemon.name)}</p>
        <div className='flex w-full mt-1 gap-1'>
          {pokemon.types.map(type => {
            return (
              <React.Fragment key={type}>
                <TypeIcon type={type} className='min-w-20 px-2 py-1' />
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default React.memo(PokemonList)