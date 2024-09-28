import React from 'react'
import { cn } from '@/lib/cn'

const TypeIcon = ({
  type,
  className,
}: {
  type: string
  className?: string,
}) => {
  return (
    <div className={cn('rounded-md', className, {
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
    })}>
      <p className='text-center text-xs text-white drop-shadow-md' style={{ textShadow: '1px 1px 2px black' }}>{type.toUpperCase()}</p>
    </div>
  )
}

export default TypeIcon