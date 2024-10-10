import React from 'react'
import Image from 'next/image';
import { notFound } from 'next/navigation'
import { getPokemon } from '@/lib/actions'
import { capitalize, convertHeight, convertWeight, formatAbilityName } from '@/lib/helpers'
import { cn } from '@/lib/cn';
import TypeIcon from '@/ui/type-icon'

const PokemonById = async ({
  params,
}: {
  params: { nameOrId: string }
}) => {
  const pokemon = await getPokemon(params.nameOrId);

  if (!pokemon) {
    notFound();
  }

  const backgroundGradientClassname = cn('bg-gradient-to-r', {
    'bg-normal' : pokemon.types[0] === 'normal',
    'from-red-600 via-fire to-red-600' : pokemon.types[0] === 'fire',
    'from-blue-600 via-water to-blue-600' : pokemon.types[0] === 'water',
    'bg-electric' : pokemon.types[0] === 'electric',
    'from-green-500 via-grass to-green-500' : pokemon.types[0] === 'grass',
    'bg-ice' : pokemon.types[0] === 'ice',
    'bg-fighting' : pokemon.types[0] === 'fighting',
    'bg-poison' : pokemon.types[0] === 'poison',
    'bg-ground' : pokemon.types[0] === 'ground',
    'bg-flying' : pokemon.types[0] === 'flying',
    'bg-psychic' : pokemon.types[0] === 'psychic',
    'bg-bug' : pokemon.types[0] === 'bug',
    'bg-rock' : pokemon.types[0] === 'rock',
    'bg-ghost' : pokemon.types[0] === 'ghost',
    'bg-dragon' : pokemon.types[0] === 'dragon',
    'bg-dark' : pokemon.types[0] === 'dark',
    'bg-steel' : pokemon.types[0] === 'steel',
    'bg-fairy' : pokemon.types[0] === 'fairy',
  })

  return (
    <div className='max-w-3xl m-3 p-[10px] bg-yellow-400 rounded-md'>
      <div className={`px-2 py-1 rounded-md ${backgroundGradientClassname}`}>

        <div className='flex justify-between items-center px-1'>
          <p className='text-lg font-bold'>{capitalize(pokemon.name)}</p>
          <div className='flex gap-1'>
            {pokemon.types.map(type => {
              return (
                <React.Fragment key={type}>
                  <TypeIcon type={type} variant='icon' />
                </React.Fragment>
              )
            })}
          </div>
        </div>

        <Image
          className='mt-2 px-5 bg-gray-200 rounded-md'
          src={pokemon.image_url}
          width={500}
          height={500}
          alt={pokemon.name}
        />

        <div className='grid grid-cols-1 my-2 px-1 gap-3'>
          <div className='text-center'>
            <p className='text-sm text-white'>Height</p>
            <p className='text-xl'>{convertHeight(pokemon.height)}</p>
          </div>
          <div className='text-center'>
            <p className='text-sm text-white'>Genus</p>
            <p className='text-xl'>{pokemon.species.genus}</p>
          </div>
          <div className='text-center'>
            <p className='text-sm text-white'>Weight</p>
            <p className='text-xl'>{convertWeight(pokemon.weight)}</p>
          </div>
          <div className='text-center'>
            <p className='text-sm text-white'>Abilities</p>
            <p className='text-xl'>
              {pokemon.abilities.map((abilityName, i) => {
                if (i === 0) {
                  return formatAbilityName(abilityName);
                }
                return (
                  <span className='italic text-lg'>
                    , {formatAbilityName(abilityName)}
                  </span>
                )
              })}
            </p>
          </div>
          <div className='text-center md:col-span-2'>
            <p className='text-sm text-white'>Gender Rate</p>
            {pokemon.species.gender_rate < 0
              ? <p className='text-xl'>n/a</p>
              : <div className='flex w-full h-5 border-collapse'>
                <div className='flex justify-center items-center bg-blue-500 text-[10px] border border-black' style={{ width: `${12.5 * (8 - pokemon.species.gender_rate)}%` }}>
                {12.5 * (8 - pokemon.species.gender_rate)}%
                </div>
                <div className='flex justify-center items-center bg-pink-600 text-[10px] border border-l-0 border-black' style={{ width: `${12.5 * pokemon.species.gender_rate}%` }}>
                  {12.5 * pokemon.species.gender_rate}%
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default React.memo(PokemonById)