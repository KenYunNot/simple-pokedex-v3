import React from 'react'
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className='relative flex justify-end items-center w-full h-12 px-2 bg-pokeballred text-white'>
      <p className='absolute left-2  font-bold'>Simple Pokedex v3</p>
      <MenuIcon className='p-1 w-8 h-8 rounded-sm' />
    </nav>
  )
}

export default Navbar