"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { MenuIcon } from "lucide-react";


const links = [
  { href: '/', text: 'Home' },
  { href: '/pokemon', text: 'Pokemon' },
]

const Navbar = () => {
  return (
    <nav className='relative flex items-center h-12 md:h-20 px-2 bg-pokeballred text-white'>
      <Image 
        className='absolute w-52 h-auto p-2 md:left-6 md:p-0 md:w-72'
        src={'/logo.png'}
        width={300}
        height={300}
        alt='Simple Pokedex v3'
      />
      <Mobile />
      <TabletDesktop />
    </nav>
  )
}

const Mobile = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);

  return (
    <div className='flex md:hidden justify-end w-full'>
      <MenuIcon className='p-1 w-8 h-8 rounded-sm' onClick={() => setMenuToggle(!menuToggle)} />
      <ul className={cn('absolute top-12 left-0 flex flex-col w-full bg-white text-pokeballred border border-t-0 border-pokeballred list-none z-50', {
        'hidden' : menuToggle === false,
      })}>
        {links.map(link => (
          <li className='flex w-full h-12 font-bold'>
            <Link key={link.href} href={link.href} className='flex justify-center items-center w-full h-full'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TabletDesktop = () => {
  return (
    <div className='hidden md:flex justify-center w-full'>
      <ul className='flex gap-3 mx-auto text-white list-none'>
        {links.map(link => (
          <li className='flex w-32 h-12 font-bold rounded-md duration-200 hover:bg-white hover:text-pokeballred'>
            <Link key={link.href} href={link.href} className='flex justify-center items-center w-full h-full'>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar