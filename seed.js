import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function seedPokemonSpecies() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon-species';
  for (let i = 1; i <= 101; i++) {
    const response = await fetch(`${baseUrl}/${i}`);
    const json = await response.json();
    const data = {
      id: json.id,
      name: json.names.find(entry => entry.language.name === 'en').name,
      genus: json.genera.find(entry => entry.language.name === 'en').genus,
      gender_rate: json.gender_rate,
    }
    const species = await prisma.pokemonSpecies.upsert({
      where: { id: i },
      update: data,
      create: data,
    });
    console.log(`Seeded #${species.id}`);
    await sleep(1500);
  }
}

async function seedPokemon() {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  for (let i = 1; i <= 101; i++) {
    const response = await fetch(`${baseUrl}/${i}`);
    const json = await response.json();
    const [hp, attack, defense, special_attack, special_defense, speed] = json.stats;
    const data = {
      id: json.id,
      name: json.name,
      types: json.types.map(entry => entry.type.name),
      abilities: json.abilities.map(entry => entry.ability.name),
      height: json.height,
      weight: json.weight,
      image_url: json.sprites.other['official-artwork'].front_default,
      hp: hp.base_stat,
      attack: attack.base_stat,
      defense: defense.base_stat,
      sp_attack: special_attack.base_stat,
      sp_defense: special_defense.base_stat,
      speed: speed.base_stat,
      species: {
        connect: { id: i }
      }
    }
    const pokemon = await prisma.pokemon.upsert({
      where: { id: i },
      update: data,
      create: data,
    });
    console.log(`Seeded Pokemon #${i}`);
    await sleep(1500);
  }
}

async function main() {
  // console.log('Seeding PokemonSpecies...');
  // await seedPokemonSpecies();
  // console.log('Done');
  console.log('Seeding Pokemon');
  await seedPokemon();
  console.log('Done');
}

main();