import React from 'react'
import Pagination from '@/ui/pagination';
import PokemonList from '@/ui/pokemonList'
import { getTotalPokemonPages } from '@/libs/actions';

const PokemonListPage = async ({
  searchParams,
}: {
  searchParams: { page?: string, query?: string }
}) => {
  const page = Number(searchParams.page) || 1;
  const query = searchParams.query || '';
  const totalPages = await getTotalPokemonPages();

  return (
    <div className='flex flex-col m-4'>
      <PokemonList page={page} query={query} />
      <Pagination page={page} totalPages={totalPages} />
    </div>
  )
}

export default React.memo(PokemonListPage)