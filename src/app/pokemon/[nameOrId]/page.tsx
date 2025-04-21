import React from 'react';

import PokemonCard from '@/ui/pokemon/card';
import PokemonStats from '@/ui/pokemon/stats';

const PokemonById = async ({ params }: { params: Promise<{ nameOrId: string }> }) => {
  const { nameOrId } = await params;

  return (
    <div className='max-w-[760px] m-3 md:mx-auto my-3'>
      <PokemonCard nameOrId={nameOrId} />
      <PokemonStats nameOrId={nameOrId} />
    </div>
  );
};

export default React.memo(PokemonById);
