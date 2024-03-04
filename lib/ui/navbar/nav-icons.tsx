import Image from "next/image";
import { HomeIcon as HeroIconsHome } from "@heroicons/react/24/outline";

export function HomeIcon() {
  return <HeroIconsHome className="w-8 h-8 text-white" />;
}

export function PokeballIcon() {
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

export function TypeIcon() {
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