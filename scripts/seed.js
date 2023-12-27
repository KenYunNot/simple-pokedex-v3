const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


async function seedPokemon() {
  // Seed all pokemon
  let i = 1;
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pokemon = await response.json();
    while (response.status === 200) {
      let pokemon_id = pokemon.id;
      let name = pokemon.name;
      let species = pokemon.species.name;
      // If default image not available, replace with not found image
      let image_url = pokemon.sprites.other['official-artwork'].front_default;
      if (image_url === null) image_url = "/no-image.svg"
      // If sprite image not available, replace with not found image
      let sprite_url = pokemon.sprites.front_default;
      if (sprite_url === null) sprite_url = "/no-image.svg";
      let type1 = pokemon.types[0].type.name;
      let type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : null;
      await prisma.pokemon.create({
        data: {
          pokemon_id,
          name,

          species,
          image_url,
          sprite_url,
          type1,
          type2,
        }
      });
      console.log(`Seeded Pokemon #${i++}`);
      await new Promise(r => setTimeout(r, 1000));
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      try {
        pokemon = await response.json();
      } catch (error) {
        pokemon = null;
      }
    }
  } catch (error) {
    console.error("Error seeding Pokemon:", error);
    throw error;
  }
}

async function seedPokemonSpecialForms() {
  let i = 10001;
  try {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pokemon = await response.json();
    while (response.status === 200) {
      let pokemon_id = pokemon.id;
      let name = pokemon.name;
      let species = pokemon.species.name;
      // If default image not available, replace with not found image
      let image_url = pokemon.sprites.other['official-artwork'].front_default;
      if (image_url === null) image_url = "/no-image.svg"
      // If sprite image not available, replace with not found image
      let sprite_url = pokemon.sprites.front_default;
      if (sprite_url === null) sprite_url = "/no-image.svg";
      let type1 = pokemon.types[0].type.name;
      let type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : null;
      await prisma.pokemon.create({
        data: {
          pokemon_id,
          name,
          species,
          image_url,
          sprite_url,
          type1,
          type2,
        }
      });
      console.log(`Seeded Pokemon #${i++}`);
      await new Promise(r => setTimeout(r, 1000));
      response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      try {
        pokemon = await response.json();
      } catch (error) {
        pokemon = null;
      }
    }
  } catch (error) {
    console.error("Error seeding Pokemon:", error);
    throw error;
  }
}

async function seedPokemonSpecies() {
  let i = 1;
    // Seed all pokemon
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
      let pokemon = await response.json();
      while (response.status === 200) {
        // Do the seeding

        console.log(`Seeded Pokemon #${i++}`);
        await new Promise(r => setTimeout(r, 1000));
        response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        try {
          pokemon = await response.json();
        } catch (error) {
          pokemon = null;
        }
      }
    } catch (error) {
      console.error("Error seeding Pokemon:", error);
      throw error;
    }
}

async function main() {
  // Finished seeding all Pokemon on 2023-12-25 at 10:00pm EST
  // await seedPokemon();
  console.log("Finished seeding all Pokemon");
}

main().catch((error) => {
  console.error("An error occured while trying to seed the database:", error);
})