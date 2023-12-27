export function capitalize(s: string) {
  if (s.length === 0) throw new Error("String cannot be empty");
  return s.charAt(0).toUpperCase() + s.slice(1);
};

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