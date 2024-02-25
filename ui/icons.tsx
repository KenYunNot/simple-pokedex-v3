import Image from "next/image";
import { HomeIcon as HeroIconsHome } from "@heroicons/react/24/outline";

export function HomeIcon({ small } : { small?: boolean }) {
  return <HeroIconsHome className="w-8 h-8 text-white" />;
}

export function PokeballIcon({ small } : { small?: boolean }) {
  return (
    <Image
      className=""
      src="/pokeball.svg"
      width={30}
      height={30}
      alt="Link to Pokemon list"
    />
  );
}

export function TypeIcon({ small } : { small?: boolean }) {
  return (
    <Image
      className=""
      src="/electric.svg"
      width={30}
      height={30}
      alt="Link to type pages"
    />
  );
}