import React from 'react'

import PokemonCard from '@/ui/pokemon/card';
import PokemonStats from '@/ui/pokemon/stats';

const PokemonById = ({
  params,
}: {
  params: { nameOrId: string }
}) => {

  return (
    <div className='max-w-[760px] m-3 md:mx-auto my-3'>
      <PokemonCard nameOrId={params.nameOrId} />
      <PokemonStats nameOrId={params.nameOrId} />
    </div>
  )
}


export default React.memo(PokemonById)