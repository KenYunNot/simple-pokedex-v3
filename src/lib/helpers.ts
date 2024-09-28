export function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}

export function generatePagination(page: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array(totalPages).fill(0).map((_, index) => index+1);
  }

  if (page <= 3) {
    return [1, 2, 3, 4, '...', totalPages];
  }

  if (page > totalPages-3) {
    return [1, '...', totalPages-3, totalPages-2, totalPages-1, totalPages];
  }

  else {
    return [1, '...', page-1, page, page+1, '...', totalPages];
  }
}