const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


/* Sleeps for the given time in milliseconds */
async function sleep(time) {
  await new Promise(r => setTimeout(r, time));
}



async function seedPokemon() {
  let index = 1;
  try {
    // Fetch from api and convert to JSON
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    let pokemon = await response.json();
    while (response.status === 200) {
      // Deallocate all required fields
      let id = pokemon.id;
      let name = pokemon.name;
      
      let image_url = pokemon.sprites.other['official-artwork'].front_default;
      if (image_url === null) image_url = '/no-image.svg';
      let sprite_url = pokemon.sprites.front_default;
      if (sprite_url === null) image_url = '/no-image.svg';
      // Fetch type ids from list of types in the following format:
      //     [ {id: <type_id>}, {id: <type_id>}? ]
      // We need this format connect records more conveniently
      const getTypeIdsFromTypes = (type) => {
        let tokens = type.type.url.split('/');
        return Number(tokens[tokens.length-2]);
      }
      let types = pokemon.types.map(getTypeIdsFromTypes);
    }
  } catch (error) {
    console.error("Error seeding Pokemon:", error);
    throw error;
  }
}


async function seedTypes() {
  // Declare array with all type names
  const types = [
    'normal', 
    'fighting', 
    'flying', 
    'poison', 
    'ground', 
    'rock', 
    'bug', 
    'ghost', 
    'steel', 
    'fire', 
    'water', 
    'grass', 
    'electric', 
    'psychic', 
    'ice', 
    'dragon', 
    'dark', 
    'fairy'
  ];
  // Create all type records (if they don't exist)
  try {
    for (let [id, name] of types.entries()) {
      await prisma.type.upsert({
        where: {
          id,
        },
        update: {},
        create: {
          id,
          name,
        }
      });
      console.log(`Created ${name} type record`);
    }
  } catch (error) {
    console.error("Error creating type records", error);
    throw error;
  }
  // Connect all type relations
  let index = 2;
  try {
    // Fetch from api and convert to JSON
    let response = await fetch(`https://pokeapi.co/api/v2/type/${index}`);
    let type = await response.json();
    while (response.status === 200) {
      // Fetch type ids for all damage relations in the following format:
      //     [ {id: <type_id>}, {id: <type_id>}? ]
      // We need this format connect records more conveniently
      const getTypeIdsFromRelations = (relation) => {
        let tokens = relation.url.split("/");
        return { id: Number(tokens[tokens.length-2])};
      }
      let double_damage_from = type.damage_relations.double_damage_from.map(getTypeIdsFromRelations);
      let double_damage_to = type.damage_relations.double_damage_to.map(getTypeIdsFromRelations);
      let half_damage_from = type.damage_relations.half_damage_from.map(getTypeIdsFromRelations);
      let half_damage_to = type.damage_relations.half_damage_to.map(getTypeIdsFromRelations);
      let no_damage_from = type.damage_relations.no_damage_from.map(getTypeIdsFromRelations);
      let no_damage_to = type.damage_relations.no_damage_to.map(getTypeIdsFromRelations);
      await prisma.type.update({
        where: {
          id: index,
        },
        data: {
          double_damage_from: {
            connect: double_damage_from,
          },
          double_damage_to: {
            connect: double_damage_to,
          },
          half_damage_from: {
            connect: half_damage_from
          },
          half_damage_to: {
            connect: half_damage_to
          },
          no_damage_from: {
            connect: no_damage_from
          },
          no_damage_to: {
            connect: no_damage_to
          }
        }
      });
      console.log(`Connected ${type.name} type relations`);
      await sleep(1000);
      response = await fetch(`https://pokeapi.co/api/v2/type/${++index}`);
      try {
        type = await response.json();
      } catch (error) {
        type = null;
      }
    }
  } catch (error) {
    console.error("Error connecting type relations:", error);
    throw error;
  }
  console.log("Finished connecting all type relations");
}


async function main() {
  // Finished seeding and connecting all types on 2023-12-27 at 5:40pm EST
  // Finished seeding all Pokemon on 2023-12-25 at 10:00pm EST
  // await seedTypes();
  await seedPokemon();
  console.log("Finished seeding all Pokemon");
}

main().catch((error) => {
  console.error("An error occured while trying to seed the database:", error);
})