import { Pokemon } from "@/app/lib/definitions";

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
  // If the total pages is less than or equal to 7, display all page numbers.
  if (totalPages <= 7) 
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  // If current page is within the first three pages, display the first three pages, an ellipsis, and the last two pages.
  if (currentPage <= 3)
    return [...Array.from({ length: currentPage + 2 }, (_, i) => i + 1), '...', totalPages-1, totalPages];

  // If current page is within the last three pages, display the first two pages, an ellipsis, and the last three pages.
  if (currentPage > totalPages-3)
    return [1, 2, "...", totalPages-2, totalPages-1, totalPages];

  // Else, the current page must be in the middle of the total pages. Display the first page, an ellipsis, the current and adjacent pages, another ellipsis, and the last page.
  return [1, "...", currentPage-1, currentPage, currentPage+1, "...", totalPages];
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

