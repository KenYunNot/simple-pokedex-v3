import Link from "next/link";
import Image from "next/image";

import { SocialIcon } from "react-social-icons";

import BentoComponent from "@/lib/ui/bento-component";
import PokemonSlider from "@/lib/ui/slider";

import { fetchPokemonByName } from "@/lib/data/pokemon";


export default async function Home() {
  const bulbasaur = await fetchPokemonByName("bulbasaur");
  const ivysaur = await fetchPokemonByName("ivysaur");
  const venusaur = await fetchPokemonByName("venusaur");

  // This should never happen
  if (!bulbasaur || !ivysaur || !venusaur) {
    throw Error("Something went wrong!");
  }

  return (
    <div className="h-full">
      <section className="h-screen bg-gradient-to-b from-red-500 to-red-600">
        <div className="flex flex-col justify-center items-center w-full h-full text-white">
          <h1 className="pb-5 text-3xl text-center font-semibold md:pb-10 md:text-[45px] 2xl:pb-16 2xl:text-8xl">Welcome to Simple Pokedex v3!</h1>
          <p className="md:text-xl 2xl:text-4xl">The simplest solution for Pokemon data</p>
        </div>
      </section>
      <section className="w-full py-5">
        <div className="grid grid-cols-4 auto-rows-[300px] gap-3 max-w-[1500px] mx-[auto] py-32 bg-transparent">

          <BentoComponent rowSpan={2} colSpan={1} className="duration-200 hover:brightness-90 hover:cursor-pointer" >
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

          <BentoComponent rowSpan={1} colSpan={2} className="duration-200 hover:brightness-90 hover:cursor-pointer" >
            <Link href="/types" className="flex flex-col justify-center items-center h-full">
              <ImageSection>
                <div className="p-4 bg-fire rounded-full">
                  <Image 
                    src="/fire.svg"
                    width={100}
                    height={100}
                    alt="Fire SVG icon"
                  />
                </div>
                <div className="p-4 bg-water rounded-full">
                  <Image 
                    src="/water.svg"
                    width={100}
                    height={100}
                    alt="Water SVG icon"
                  />
                </div>
                <div className="p-4 bg-grass rounded-full">
                  <Image 
                    src="/grass.svg"
                    width={100}
                    height={100}
                    alt="Grass SVG icon"
                  />
                </div>
              </ImageSection>
              <TextSection className="bg-yellow-500">
                <h2 className="text-3xl text-white font-semibold">Check out the Pokemon types!</h2>
              </TextSection>
            </Link>
          </BentoComponent>

          <BentoComponent rowSpan={2} colSpan={1} className="duration-200 hover:brightness-90 hover:cursor-pointer" >
            <Link href="/pokedex" className="flex flex-col justify-center items-center h-full">
              <ImageSection>
                <Image 
                  src={ivysaur.image_url}
                  width={330}
                  height={330}
                  alt="Image of Bulbasaur"
                />
              </ImageSection>
              <TextSection className="bg-rose-400">
                <h2 className="pb-4 text-3xl text-white font-semibold">Why Simple Pokedex?</h2>
                <p className="text-rose-900">
                  Find out more about your favorite Pokemon and explore what makes them powerful! Simple Pokedex is your one-stop destination for all things Pokemon!
                </p>
              </TextSection>
            </Link>
          </BentoComponent>

          <BentoComponent rowSpan={1} colSpan={1} className="duration-200 hover:brightness-90 hover:cursor-pointer" >
            <Link href="https://github.com/KenYunNot" target="_blank" className="flex flex-col justify-center items-center h-full">
              <ImageSection>
                <SocialIcon network="github" />
              </ImageSection>
              <TextSection className="bg-gray-900">
                <h2 className="text-3xl text-white font-semibold">See my GitHub!</h2>
              </TextSection>
            </Link>
          </BentoComponent>

          <BentoComponent rowSpan={1} colSpan={1} className="duration-200 hover:brightness-90 hover:cursor-pointer" >
            <Link href="https://www.linkedin.com/in/ken-yun/" target="_blank" className="flex flex-col justify-center items-center h-full">
              <ImageSection>
                <SocialIcon network="linkedin" />
              </ImageSection>
              <TextSection className="bg-sky-700">
                <h2 className="text-3xl text-white font-semibold">See my LinkedIn!</h2>
              </TextSection>
            </Link>
          </BentoComponent>

        </div>
      </section>
      <PokemonSlider />
    </div>
  );
}


function ImageSection({ children } : { children: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center gap-2 w-full h-full p-4 bg-gray-200">
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