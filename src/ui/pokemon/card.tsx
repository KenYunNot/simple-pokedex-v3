import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPokemon } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { capitalize, convertHeight, convertWeight, formatAbilityName } from '@/lib/helpers';
import TypeIcon from '@/ui/type-icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/shadcn/tooltip';
import { InfoIcon } from 'lucide-react';

const PokemonCard = async ({ nameOrId }: { nameOrId: string }) => {
  const pokemon = await getPokemon(nameOrId);

  if (!pokemon) {
    notFound();
  }

  const backgroundGradientClassname = cn('bg-gradient-to-r', {
    'bg-normal': pokemon.types[0] === 'normal',
    'from-red-600 via-fire to-red-600': pokemon.types[0] === 'fire',
    'from-blue-600 via-water to-blue-600': pokemon.types[0] === 'water',
    'bg-electric': pokemon.types[0] === 'electric',
    'from-green-500 via-grass to-green-500': pokemon.types[0] === 'grass',
    'bg-ice': pokemon.types[0] === 'ice',
    'bg-fighting': pokemon.types[0] === 'fighting',
    'bg-poison': pokemon.types[0] === 'poison',
    'bg-ground': pokemon.types[0] === 'ground',
    'bg-flying': pokemon.types[0] === 'flying',
    'bg-psychic': pokemon.types[0] === 'psychic',
    'bg-bug': pokemon.types[0] === 'bug',
    'bg-rock': pokemon.types[0] === 'rock',
    'bg-ghost': pokemon.types[0] === 'ghost',
    'bg-dragon': pokemon.types[0] === 'dragon',
    'bg-dark': pokemon.types[0] === 'dark',
    'bg-steel': pokemon.types[0] === 'steel',
    'bg-fairy': pokemon.types[0] === 'fairy',
  });

  return (
    <div className='p-[10px] bg-yellow-400 rounded-md'>
      <div className={`p-2 rounded-md ${backgroundGradientClassname}`}>
        <div
          id='card-header'
          className='flex justify-between items-center px-1'
        >
          <p className='text-lg font-bold'>{capitalize(pokemon.name)}</p>
          <div className='flex gap-1'>
            {pokemon.types.map((type) => {
              return (
                <React.Fragment key={type}>
                  <TypeIcon
                    type={type}
                    variant='icon'
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div
          id='card-content'
          className='flex flex-col md:flex-row'
        >
          <Image
            className='mt-2 px-5 bg-gray-200 rounded-md'
            src={pokemon.image_url}
            width={400}
            height={400}
            alt={pokemon.name}
          />

          <div className='grow grid grid-cols-1 md:grid-cols-5 my-2 p-3 md:p-6 gap-3'>
            <div className='text-center md:text-left md:col-span-2'>
              <p className='text-sm md:text-md text-white'>Height</p>
              <p className='text-xl'>{convertHeight(pokemon.height)}</p>
            </div>
            <div className='text-center md:text-left md:col-span-3'>
              <p className='text-sm md:text-md text-white'>Genus</p>
              <p className='text-xl'>{pokemon.species.genus}</p>
            </div>
            <div className='text-center md:text-left md:col-span-2'>
              <p className='text-sm md:text-md text-white'>Weight</p>
              <p className='text-xl'>{convertWeight(pokemon.weight)}</p>
            </div>
            <div className='text-center md:text-left md:col-span-3'>
              <p className='text-sm md:text-md text-white'>Abilities</p>
              <div className='text-xl'>
                <p>{formatAbilityName(pokemon.abilities[0])}</p>
                {pokemon.abilities.slice(1).map((abilityName, i) => (
                  <p
                    key={i}
                    className='italic text-lg text-gray-600'
                  >
                    {formatAbilityName(abilityName)}
                  </p>
                ))}
              </div>
            </div>
            <div className='text-center md:text-left md:col-span-5'>
              <div className='flex gap-2 justify-center md:justify-start text-sm md:text-md text-white'>
                Gender Rate
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger className='flex items-center'>
                      <InfoIcon className='peer/info inline w-4 h-4' />
                    </TooltipTrigger>
                    <TooltipContent
                      side='right'
                      className='bg-white font-bold'
                    >
                      <span className='text-blue-500'>
                        {12.5 * (8 - pokemon.species.gender_rate)}% male
                      </span>
                      <span className='text-black'>, </span>
                      <span className='text-pink-600'>
                        {12.5 * pokemon.species.gender_rate}% female
                      </span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {pokemon.species.gender_rate < 0 ? (
                <p className='text-xl'>n/a</p>
              ) : (
                <div className='flex w-full h-6'>
                  <div
                    className='flex justify-center items-center bg-blue-500'
                    style={{ width: `${12.5 * (8 - pokemon.species.gender_rate)}%` }}
                  />
                  <div
                    className='flex justify-center items-center bg-pink-600'
                    style={{ width: `${12.5 * pokemon.species.gender_rate}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PokemonCard);
