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
      <SlideInNavbar pathname={pathname} />
      <FullNavbar pathname={pathname} />
    </>
  );
}

/* A dropdown navbar for mobile resolutions */
function SlideInNavbar({ pathname }: { pathname: string }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <nav className="fixed flex justify-between items-center w-full h-14 bg-transparent md:hidden">
        <LogoLink small={true} />
        <button onClick={() => setShowNav(!showNav)}>
          <Bars3Icon className="w-7 h-7 mx-2 text-white" />
        </button>
        {/* <SignOutButton /> */}
        <ul
          className={clsx("absolute top-14 left-0 w-full", {
            "hidden": !showNav,
            "block": showNav,
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
    </div>
  );
}

/* A full navbar for tablet and desktop resolutions */
function FullNavbar({ pathname }: { pathname: string }) {
  return (
    <nav className="fixed hidden md:flex justify-start w-full bg-red-500">
      <LogoLink />
      <ul className="absolute flex justify-end items-center gap-3 w-full h-full px-3 lg:justify-center">
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

function LogoLink({ small } : { small?: boolean }) {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={small ? 220 : 300}
        height={small ? 130 : 167}
        alt="Simple Pokedex v3 logo"
        priority={true}
      />
    </Link>
  );
}
