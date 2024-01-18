"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { HomeIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: <HomeIcon className="w-11 h-11 text-white" />},
  { name: "Pokédex", href: "/pokedex", icon: <PokeballIcon />},
  { name: "Types", href: "/types", icon: <TypeIcon />},
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-around items-center bg-red-500">
      <Link
        href='/'  
      >
        <Image
          className="px-3 w-96"
          src="/logo.png"
          width={1023}
          height={200}
          alt="Simple Pokedex v3 logo" 
        />
      </Link>
      <div className="flex">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "w-24 h-20 mx-1 flex flex-col justify-center items-center rounded-md",
                {
                  "bg-yellow-400 pointer-events-none" : link.href !== "/" && pathname.includes(link.href),
                  "hover:bg-red-400" : link.href !== "/" && !pathname.includes(link.href),
                },
                {
                  "bg-yellow-400 pointer-events-none" : link.href === "/" && pathname === "/",
                  "hover:bg-red-400" : link.href === "/" && pathname !== "/",
                }
              )}
            >
              {link.icon}
              <p className="text-white font-semibold">{link.name}</p>
            </Link>
          )
        })}
      </div>
    </nav>
  );
}

function PokeballIcon() {
  return (
    <Image
      className=""
      src="/pokeball.svg"
      width={40}
      height={40}
      alt="Link to Pokemon list" 
    />
  );
}

function TypeIcon() {
  return (
    <Image
      className=""
      src="/electric.svg"
      width={40}
      height={40}
      alt="Link to type pages" 
    />
  )
}