import React from 'react'
import Pagination from '@/ui/pokemon/pagination';
import PokemonList from '@/ui/pokemon/pokemonList'
import Search from '@/ui/pokemon/search';
import { getTotalPokemonPages } from '@/lib/actions';

const Pokemon = async ({
  searchParams,
}: {
  searchParams: { page?: string, query?: string }
}) => {
  const page = Number(searchParams.page) || 1;
  const query = searchParams.query || '';
  const totalPages = await getTotalPokemonPages();

  return (
    <div className='flex flex-col m-4'>
      <Search />
      <PokemonList page={page} query={query} />
      <Pagination page={page} totalPages={totalPages} />
    </div>
  )
}

export default React.memo(Pokemon)