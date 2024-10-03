"use client";

import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { MenuIcon } from "lucide-react";


const links = [
  { href: '/', text: 'Home' },
  { href: '/pokemon', text: 'Pokemon' },
]

const Navbar = () => {
  return (
    <nav className='relative flex justify-end items-center w-full h-12 px-2 bg-pokeballred text-white'>
      <p className='absolute left-2  font-bold'>Simple Pokedex v3</p>
      <Mobile />
      <TabletDesktop />
    </nav>
  )
}

const Mobile = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);

  return (
    <div>
      <MenuIcon className='p-1 w-8 h-8 rounded-sm' onClick={() => setMenuToggle(!menuToggle)} />
      <ul className={cn('absolute top-12 left-0 flex flex-col w-full bg-white text-pokeballred border border-t-0 border-pokeballred list-none z-50 md:hidden', {
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
    <div className='hidden md:block'>
      TabletDesktop
    </div>
  )
}

export default Navbar