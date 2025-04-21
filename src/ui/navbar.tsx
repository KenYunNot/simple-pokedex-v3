'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';

const links = [
  { href: '/', text: 'Home' },
  { href: '/pokemon', text: 'Pokemon' },
];

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='w-full px-6 py-3 flex max-md:flex-col justify-between lg:justify-evenly items-center bg-pokeballred text-white'
    >
      <Link href='/'>
        <img
          className='w-60 md:w-72'
          src='/logo.webp'
          alt='Simple Pokedex v3'
        />
      </Link>
      <ul className='max-md:mt-3 p-1 md:p-2 flex gap-6 text-white list-none bg-white rounded-full'>
        {links.map((link) => (
          <li
            key={link.href}
            className='px-2 py-1 flex max-lg:text-sm font-bold text-pokeballred rounded-full duration-200 hover:bg-pokeballred hover:text-white active:bg-red-400 active:text-white'
          >
            <Link
              key={link.href}
              href={link.href}
              className='flex justify-center items-center'
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
