"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { signOut } from "next-auth/react";

const links = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="w-11 h-11 text-white" />,
  },
  { name: "Pokédex", href: "/pokedex", icon: <PokeballIcon /> },
  { name: "Types", href: "/types", icon: <TypeIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();

  // If the page is login or signup, don't display the navbar
  //      Figure out better way to implement this
  //      It shouldn't be a component's job to determine whether itself is rendered or not
  if (pathname.endsWith("/login") || pathname.endsWith("/register")) {
    return null;
  }

  return (
    <nav className="flex justify-around items-center bg-red-500">
      <Link href="/">
        <Image
          className="px-3 w-96"
          src="/logo.png"
          width={1023}
          height={200}
          alt="Simple Pokedex v3 logo"
        />
      </Link>
      <div className="flex items-center ">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "w-24 h-20 mx-1 flex flex-col justify-center items-center text-white rounded-md",
                {
                  "bg-yellow-400":
                    link.href !== "/" && pathname.startsWith(link.href),
                  "hover:bg-red-400":
                    link.href !== "/" && !pathname.startsWith(link.href),
                },
                {
                  "bg-yellow-400": link.href === "/" && pathname === "/",
                  "hover:bg-red-400": link.href === "/" && pathname !== "/",
                }
              )}
            >
              {link.icon}
              <p className="font-semibold">{link.name}</p>
            </Link>
          );
        })}
        <button
          className="px-5 py-3 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
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
  );
}
