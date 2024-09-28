'use client';

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'


const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300)

  return (
    <div className='flex justify-center w-full'>
      <input 
        className='my-2 px-1 border border-gray-400 rounded-md' 
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Search Pokemon...'
      />
    </div>
  )
}

export default Search