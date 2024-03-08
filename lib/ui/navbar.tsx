"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";


const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Pokédex",
    href: "/pokedex",
  },
  {
    name: "Types",
    href: "/types",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <CollapsedNavbar pathname={pathname} className="md:hidden" />
      <FullNavbar pathname={pathname} className="hidden md:flex" />
    </>
  );
}


/* A dropdown navbar for mobile resolutions */
function CollapsedNavbar({
  className = "",
  pathname,
}: {
  className?: string;
  pathname: string;
}) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center h-14 px-2 bg-red-500 ${className}`}
    >
      <LogoLink />
      <button onClick={() => setShowNav(!showNav)}>
        <Bars3Icon className="w-7 h-7 text-white" />
      </button>
      {/* <SignOutButton /> */}
      <ul
        className={clsx("absolute top-14 left-0 w-full", {
          hidden: !showNav,
          block: showNav,
        })}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx(
                  "flex justify-center items-center w-36 bg-red-500 py-3 text-xl text-white font-semibold",
                  {
                    "bg-yellow-400 pointer-events-none": isActive,
                    "hover:bg-red-400": !isActive,
                  }
                )}
                onClick={() => setShowNav(false)}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


/* A full navbar for tablet and desktop resolutions */
function FullNavbar({
  className = "",
  pathname,
}: {
  className?: string;
  pathname: string;
}) {
  return (
    <nav className={`relative flex justify-start w-full px-3 bg-red-500 ${className}`}>
      <LogoLink />
      <ul className="absolute flex justify-center items-center gap-3 w-full h-full">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  "flex flex-col justify-center items-center w-24 py-2 rounded-md text-lg text-white font-semibold",
                  {
                    "bg-yellow-500 pointer-events-none": isActive,
                    "hover:text-blue-200 hover:underline": !isActive,
                  }
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LogoLink() {
  return (
    <Link href="/" className="px-4">
      <Image
        src="/logo.png"
        width={300}
        height={167}
        alt="Simple Pokedex v3 logo"
        priority={true}
      />
    </Link>
  )
}