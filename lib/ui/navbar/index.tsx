"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { HomeIcon, PokeballIcon, TypeIcon } from "./nav-icons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";


const links = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Pokédex",
    href: "/pokedex",
    icon: <PokeballIcon />,
  },
  {
    name: "Types",
    href: "/types",
    icon: <TypeIcon />,
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
      <Link href="/">
        <Image
          src="/logo.png"
          width={200}
          height={70}
          alt="Simple Pokedex v3 logo"
          priority={true}
        />
      </Link>
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
    <nav className={`flex justify-evenly w-full px-3 bg-red-500 ${className}`}>
      <Link href="/">
        <Image
          src="/logo.png"
          width={300}
          height={167}
          alt="Simple Pokedex v3 logo"
          priority={true}
        />
      </Link>
      <ul className="flex justify-center items-center">
        {links.map((link) => {
          let isActive: boolean;
          if (link.href === "/") {
            isActive = pathname === link.href;
          } else {
            isActive = pathname.startsWith(link.href);
          }
          return (
            <li key={link.href} className="h-full">
              <Link
                href={link.href}
                className={clsx(
                  "flex flex-col justify-center items-center w-24 h-full bg-red-500 rounded-md px-3 py-1 text-lg text-white font-semibold",
                  {
                    "bg-yellow-400 pointer-events-none": isActive,
                    "hover:bg-red-400": !isActive,
                  }
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          );
        })}
        {/* <SignOutButton /> */}
      </ul>
    </nav>
  );
}

// function SignOutButton() {
//   return (
//     <button
//       className="w-24 h-10 px-2 py-1 bg-yellow-400 rounded-full text-white font-semibold"
//       onClick={() => signOut()}
//     >
//       Sign Out
//     </button>
//   )
// }
