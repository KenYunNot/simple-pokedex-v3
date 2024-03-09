import Link from "next/link";
import Image from "next/image";

import { SocialIcon } from "react-social-icons";

import BentoComponent from "@/lib/ui/bento-component";

import { fetchPokemonByName } from "@/lib/data/pokemon";


export default async function BentoGrid() {
  const bulbasaur = await fetchPokemonByName("bulbasaur");
  const ivysaur = await fetchPokemonByName("ivysaur");
  const venusaur = await fetchPokemonByName("venusaur");

  // This should never happen
  if (!bulbasaur || !ivysaur || !venusaur) {
    throw Error("Something went wrong!");
  }

  return (
    <div className="grid auto-rows-[300px] gap-5 bg-transparent 
      grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

      <BentoComponent className="duration-200 hover:brightness-90 hover:cursor-pointer
        row-span-2">
        <Link href="/pokedex" className="flex flex-col justify-center items-center h-full">
          <ImageSection>
            <Image 
              src={bulbasaur.image_url}
              width={330}
              height={330}
              alt="Image of Bulbasaur"
            />
          </ImageSection>
          <TextSection className="bg-emerald-400">
            <h2 className="pb-4 text-3xl text-white font-semibold">Why Simple Pokedex?</h2>
            <p className="text-emerald-900">
              Find out more about your favorite Pokemon and explore what makes them powerful! Simple Pokedex is your one-stop destination for all things Pokemon!
            </p>
          </TextSection>
        </Link>
      </BentoComponent>

      <BentoComponent className="duration-200 hover:brightness-90 hover:cursor-pointer
        row-span-1 md:row-span-2 xl:row-span-1 xl:col-span-2" >
        <Link href="/types" className="flex flex-col justify-center items-center h-full">
          <ImageSection className="md:flex-col xl:flex-row">
            <div className="p-5 bg-fire rounded-full">
              <Image 
                src="/fire.svg"
                width={80}
                height={80}
                alt="Fire SVG icon"
              />
            </div>
            <div className="p-5 bg-water rounded-full">
              <Image 
                src="/water.svg"
                width={80}
                height={80}
                alt="Water SVG icon"
              />
            </div>
            <div className="p-5 bg-grass rounded-full">
              <Image 
                src="/grass.svg"
                width={80}
                height={80}
                alt="Grass SVG icon"
              />
            </div>
          </ImageSection>
          <TextSection className="bg-yellow-500">
            <h2 className="text-3xl text-white font-semibold">Check out the Pokemon types!</h2>
          </TextSection>
        </Link>
      </BentoComponent>

      <BentoComponent className="duration-200 hover:brightness-90 hover:cursor-pointer
        row-span-2">
        <Link href="/pokedex" className="flex flex-col justify-center items-center h-full">
          <ImageSection>
            <Image 
              src={ivysaur.image_url}
              width={330}
              height={330}
              alt="Image of Ivysaur"
            />
          </ImageSection>
          <TextSection className="bg-rose-400">
            <h2 className="pb-4 text-3xl text-white font-semibold">How does it work?</h2>
            <p className="text-rose-900">
              I created this application using Next.js, TypeScript, Tailwind CSS, and Prisma ORM on top of a PostgreSQL database! Deployed live to Vercel!
            </p>
          </TextSection>
        </Link>
      </BentoComponent>

      <BentoComponent className="duration-200 hover:brightness-90 hover:cursor-pointer" >
        <Link href="https://github.com/KenYunNot" target="_blank" className="flex flex-col justify-center items-center h-full">
          <ImageSection>
            <SocialIcon network="github" as="div" />
          </ImageSection>
          <TextSection className="bg-gray-900">
            <h2 className="text-3xl text-white font-semibold">See my GitHub!</h2>
          </TextSection>
        </Link>
      </BentoComponent>

      <BentoComponent className="duration-200 hover:brightness-90 hover:cursor-pointer" >
        <Link href="https://www.linkedin.com/in/ken-yun/" target="_blank" className="flex flex-col justify-center items-center h-full">
          <ImageSection>
            <SocialIcon network="linkedin" as="div" />
          </ImageSection>
          <TextSection className="bg-sky-700">
            <h2 className="text-3xl text-white font-semibold">See my LinkedIn!</h2>
          </TextSection>
        </Link>
      </BentoComponent>

    </div>
  )
}


function ImageSection({ children, className="" } : { children: React.ReactNode, className?: string }) {
  return (
    <section className={`flex justify-center items-center gap-2 w-full h-full p-4 bg-gray-200 ${className}`}>
      {children}
    </section>
  )
}


function TextSection({ children, className="" } : { children: React.ReactNode, className?: string }) {
  return (
    <section className={`flex flex-col justify-center w-full h-max p-7 ${className}`}>
      {children}
    </section>
  )
}