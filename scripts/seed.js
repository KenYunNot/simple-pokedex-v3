const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const { collectGenerateParams } = require("next/dist/build/utils");

/* ------------------------------------------------------------------------------------------- */
/*                                   HELPER FUNCTIONS                                          */
/* ------------------------------------------------------------------------------------------- */

/* Sleeps for the given time in milliseconds */
async function sleep(time) {
  await new Promise(r => setTimeout(r, time));
}

/* For fields in multiple languages, return all english results */
function getEnglish(entries) {
  return entries.filter((n) => n.language.name === 'en');
}

/* ------------------------------------------------------------------------------------------- */
/*                                   SEEDING FUNCTIONS                                         */
/* ------------------------------------------------------------------------------------------- */

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
          id: id+1,
        },
        update: {},
        create: {
          id: id+1,
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
  let index = 1;
  try {
    // Fetch from api and convert to JSON
    let response = await fetch(`https://pokeapi.co/api/v2/type/${index}`);
    while (response.status === 200) {
      let type = await response.json();
      // Map type ids for all damage relations in the following format:
      //     [ {id: <type_id>}, {id: <type_id>}? ]
      // We need this format connect records more conveniently
      const mapTypeIdFromURL = (relation) => {
        let tokens = relation.url.split("/");
        return { id: Number(tokens[tokens.length-2])};
      }
      let double_damage_from = type.damage_relations.double_damage_from.map(mapTypeIdFromURL);
      let double_damage_to = type.damage_relations.double_damage_to.map(mapTypeIdFromURL);
      let half_damage_from = type.damage_relations.half_damage_from.map(mapTypeIdFromURL);
      let half_damage_to = type.damage_relations.half_damage_to.map(mapTypeIdFromURL);
      let no_damage_from = type.damage_relations.no_damage_from.map(mapTypeIdFromURL);
      let no_damage_to = type.damage_relations.no_damage_to.map(mapTypeIdFromURL);
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
    }
  } catch (error) {
    console.error("Error connecting type relations:", error);
    throw error;
  }
  console.log("Finished connecting all type relations");
}


const egg_groups_map = {
  'monster': 'Monster',
  'water1': 'Water 1',
  'bug': 'Bug',
  'flying': 'Flying',
  'ground': 'Ground',
  'fairy': 'Fairy',
  'plant': 'Grass',
  'humanshape': 'Human-like',
  'water3': 'Water 3',
  'mineral': 'Mineral',
  'indeterminate': 'Amorphous',
  'water2': 'Water 2',
  'ditto': 'Ditto',
  'dragon': 'Dragon',
  'no-eggs': 'Undiscovered',
}
async function seedPokemonSpecies() {
  let index = 912;
  let flavor_texts_default = ["Ecology under research", "Ecology under research"];
  try {
    // Fetch from api and convert to JSON
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
    while (response.status === 200) {
      let species = await response.json();
      let id = species.id;
      let name = species.name;
      let namesEnglish = getEnglish(species.names);
      let full_name = namesEnglish[0] ? namesEnglish[0].name : null;
      let base_happiness = species.base_happiness === null ? 50 : species.base_happiness;
      let capture_rate = species.capture_rate;
      let egg_cycles = species.hatch_counter ? species.hatch_counter : -1;
      let egg_groups = species.egg_groups.reverse().map((group) => egg_groups_map[group.name]);
      let growth_rate = species.growth_rate.name;
      let english_entries = getEnglish(species.flavor_text_entries).map((entry) => entry.flavor_text);
      let flavor_texts = english_entries.length > 0 ? english_entries.slice(-2) : flavor_texts_default;
      let gender_rate = species.gender_rate;
      let generaEnglish = getEnglish(species.genera);
      let genus = generaEnglish[0] ? generaEnglish[0].genus : null;
      let is_legendary = species.is_legendary;
      let is_mythical = species.is_mythical;
      await prisma.pokemonSpecies.upsert({
        where: {
          id,
        },
        update: {},
        create: {
          id,
          name,
          full_name,
          base_happiness,
          capture_rate,
          egg_cycles,
          egg_groups,
          growth_rate,
          flavor_texts,
          gender_rate,
          genus,
          is_legendary,
          is_mythical,
        },
      });
      console.log(`Seeded ${full_name} species`);
      await sleep(1000);
      response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${++index}`);
    }
    
  } catch (error) {
    console.error("Error seeding Pokemon species:", error);
    throw error;
  }
}


const ID_INDEX = 6;
async function seedPokemon(start) {
  let index = start;
  try {
    let pokemon_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    await sleep(1000);
    while (pokemon_response.status === 200) {
      let pokemon = await pokemon_response.json();
      // Deallocate all required fields
      let id = pokemon.id;
      let name = pokemon.name;
      let form_name;
      if (name === pokemon.forms[0].name) {
        let forms_response = await fetch(pokemon.forms[0].url);
        await sleep(1000);
        let forms = await forms_response.json();
        let forms_english = getEnglish(forms.form_names)[0];
        form_name = forms_english ? forms_english.name : null;
      }
      let abilities = pokemon.abilities.map((ability) => ability.ability.name);
      let image_url = pokemon.sprites.other['official-artwork'].front_default;
      if (image_url === null) image_url = '/no-image.svg';
      let sprite_url = pokemon.sprites.front_default;
      if (sprite_url === null) sprite_url = '/no-image.svg';
      // Get species id from URL in the proper format to connect
      let species_id = { id: Number(pokemon.species.url.split('/')[ID_INDEX]) };
      // Get type ids from URL in the proper format to connect
      let type_ids = pokemon.types.reverse().map((type) => {
        return { id: Number(type.type.url.split('/')[ID_INDEX])}
      });
      let is_default = pokemon.is_default;
      let height = pokemon.height;
      let weight = pokemon.weight;
      // Create Pokemon first
      await prisma.pokemon.upsert({
        where: {
          id,
        },
        update: {},
        create: {
          id,
          name,
          form_name,
          abilities,
          image_url,
          sprite_url,
          is_default,
          height,
          weight,
          species: {
            connect: species_id,
          },
          types: {
            connect: type_ids,
          }
        },
      });
      console.log(`Seeded Pokemon ${name}`);
      pokemon_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${++index}`);
      await sleep(1000);
    }
  } catch (error) {
    console.error("Error seeding Pokemon:", error);
    throw error;
  }
}

async function adjustData() {
  for (let i = 10195; i <= 10227; i++) {
    let pokemon = await prisma.pokemon.findFirst({
      where: {
        id: i,
        name: {
          contains: "gmax",
        }
      },
      include: {
        species: true,
      }
    });
    if (!pokemon) throw new Error("Couldn't find Pokemon");
    await prisma.pokemon.update({
      where: {
        id: pokemon.id,
      },
      data: {
        form_name: "Gigantamax " + pokemon.species.full_name,
      }
    });
    console.log(pokemon.id);
  }
  console.log("Adjusted data");
}


async function main() {
  // Finished seeding and connecting all types on 2023-12-27 at 5:40pm EST
  // Finished seeding all Pokemon on 2023-12-25 at 10:00pm EST
  // await seedTypes();
  // await seedPokemonSpecies();
  // await seedPokemon(1);
  // await seedPokemon(10001);
  await adjustData();
  console.log("Finished seeding all Pokemon");
}

main().catch((error) => {
  console.error("An error occured while trying to seed the database:", error);
})