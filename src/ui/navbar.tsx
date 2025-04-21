'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';

const links = [{ href: '/pokemon', text: 'Pokemon' }];

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className='w-full p-3 flex flex-col lg:flex-row justify-evenly items-center bg-pokeballred text-white z-50 overflow-hidden'
    >
      <img
        className='w-52 md:w-72'
        src='/logo.webp'
        alt='Simple Pokedex v3'
      />
      <ul className='p-2 flex gap-3 text-white list-none'>
        {links.map((link) => (
          <li
            key={link.href}
            className='px-2 py-1 flex bg-amber-400 text-white font-bold max-lg:text-sm rounded-full duration-200 hover:bg-amber-500'
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
