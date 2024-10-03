import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'

const TypeIcon = ({
  type,
  variant,
}: {
  type: string
  variant: 'text' | 'icon',
}) => {
  return (
    <div className={cn('flex justify-center items-center shadow-sm shadow-black',
      {
        'rounded-md min-w-20 px-2 py-1' : variant === 'text',
        'rounded-full p-[6px] aspect-square' : variant === 'icon',
      },
      {
        'bg-normal' : type === 'normal',
        'bg-fire' : type === 'fire',
        'bg-water' : type === 'water',
        'bg-electric' : type === 'electric',
        'bg-grass' : type === 'grass',
        'bg-ice' : type === 'ice',
        'bg-fighting' : type === 'fighting',
        'bg-poison' : type === 'poison',
        'bg-ground' : type === 'ground',
        'bg-flying' : type === 'flying',
        'bg-psychic' : type === 'psychic',
        'bg-bug' : type === 'bug',
        'bg-rock' : type === 'rock',
        'bg-ghost' : type === 'ghost',
        'bg-dragon' : type === 'dragon',
        'bg-dark' : type === 'dark',
        'bg-steel' : type === 'steel',
        'bg-fairy' : type === 'fairy',
      }
    )}>
      {variant === 'text'
        ? <p className='text-center text-xs text-white' style={{ textShadow: '1px 1px 2px black' }}>{type.toUpperCase()}</p>
        : <Image src={`/${type}.svg`} width={20} height={20} alt={type} /> }
    </div>
  )
}

export default TypeIcon