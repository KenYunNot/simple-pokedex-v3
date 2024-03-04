import type { Type } from "@prisma/client";
import type { TypeWithRelations } from "./types/pokemon-types";

/* ------------------------------------------------------------------------------------------- */
/*                                   HELPER FUNCTIONS                                          */
/* ------------------------------------------------------------------------------------------- */

/* Given the DTA chart, row/column number and a multiplier, populate the row and column of the DTA chart with the multiplier */
function populateDTARowAndColumn(dtaChart: number[][], rowCol: number, multiplier: number) {
  for (let i = 1; i < dtaChart.length; i++) {
    if (rowCol !== i) {
      dtaChart[rowCol][i] *= multiplier;
      dtaChart[i][rowCol] *= multiplier;
    }
  }
}

/* ------------------------------------------------------------------------------------------- */
/*                                    MAIN FUNCTIONS                                           */
/* ------------------------------------------------------------------------------------------- */


/* Capitalizes the given string */
export function capitalize(s: string, delimiter='-') {
  if (s.length === 0) throw new Error("String cannot be empty");
  let result = "";
  for (let token of s.split(delimiter)) {
    result += token.charAt(0).toUpperCase() + token.slice(1);
    result += " ";
  }
  return result.slice(0, -1);
};

/* Returns the array of elements to display as the current pagination sequence */
export function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is less than or equal to 5, display all the page numbers
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  // If the current page is less than or equal to 3, display the first 5 pages
  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5];
  }

  // If the current page is greater than or equal to totalPages-3, display the last 5 pages
  if (currentPage >= totalPages-3) {
    return Array.from({ length: 5 }, (_, i) => (i+1) + totalPages-5) // Adding i+1 because pages start from 1, not 0
  }

  // Else, return the page and its two adjacent pages on both sides
  return [ currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2 ];
}

/* Takes height in decimeters and weight in hectograms and converts to [m, ft, kg, lbs] respectively*/
export function convertUnits(height: number, weight: number) {
  // Convert all height units
  let m = (height/10).toFixed(1);
  let ft = (height/10) * 3.28084;
  let leftoverFt = ft % 1;
  let inches = Math.round(leftoverFt * 12);
  let ftIn = `${Math.trunc(ft)}\'${String(inches).padStart(2, '0')}\"`;
  // Convert all weight units
  let kg = (weight/10).toFixed(1);
  let lbs = ((weight/10) * 2.20462).toFixed(1);
  return [m, ftIn, kg, lbs];
}

export function generateTypeDefenses(pokemonTypes: TypeWithRelations[], allTypes: Type[]) {
  // To make type IDs match index, bump length up by 1
  let type_defenses = allTypes.map((_) => 1);
  type_defenses.push(1);
  // Parse through each of the Pokemon's types and adjust its type defenses according to each damage relation
  for (let type of pokemonTypes) {
    for (let double of type.double_damage_from) {
      type_defenses[double.id] *= 2;
    }
    for (let half of type.half_damage_from) {
      type_defenses[half.id] *= 0.5;
    }
    for (let no of type.no_damage_from) {
      type_defenses[no.id] *= 0;
    }
  }
  return type_defenses;
}

/* Given a Pokemon's damage relations and a list of all Pokemon types, return it's dual-type attack chart */
export function generateDTAChart(type: TypeWithRelations, allTypes: Type[]) {
  // To make type IDs match index, bump length and width up by 1 
  let dtaChart = [];
  let initializedRow = allTypes.map((_) => 1);
  initializedRow.push(1);
  // Initialize dtaChart
  for (let i = 0; i < allTypes.length+1; i++) {
    dtaChart[i] = structuredClone(initializedRow);
  }
  // Anywhere row === col is invalid because it means the intersection of the same type
  for (let i = 0; i < allTypes.length+1; i++) {
    dtaChart[i][i] = -1;
  }
  // Populate with damage multipliers
  for (let relation of type.double_damage_to) {
    populateDTARowAndColumn(dtaChart, relation.id-1, 2);
  }
  for (let relation of type.half_damage_to) {
    populateDTARowAndColumn(dtaChart, relation.id-1, 0.5);
  }
  for (let relation of type.no_damage_to) {
    populateDTARowAndColumn(dtaChart, relation.id-1, 0);
  }
  return dtaChart;
}