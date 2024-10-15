import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PokemonNotFound = () => {
  return (
    <div className='flex flex-col gap-3 items-center mt-[25vh]'>
      <h1 className='text-2xl text-center font-bold'>Couldn{'\''}t find that Pokemon!</h1>
      <Image 
        src='/pokeball.svg'
        width={200}
        height={200}
        alt='Pokeball'
      />
      <Link 
        href='/pokemon'
        className='flex justify-center items-center px-3 py-2 w-fit group bg-pokeballred border border-pokeballred text-white font-bold rounded-full hover:bg-white hover:text-pokeballred duration-200'
      >
        Click to see more Pokemon!
      </Link>
    </div>
  )
}

export default PokemonNotFound
