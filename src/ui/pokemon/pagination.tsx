'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { generatePagination } from '@/lib/helpers';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Pagination = ({ page, totalPages }: { page: number; totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const pagination = generatePagination(page, totalPages);

  const createPageUrl = (page: string | number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className='w-fit mx-auto flex justify-center mt-6 mb-3 overflow-hidden'>
      <PaginationArrow
        href={createPageUrl(currentPage - 1)}
        direction='left'
      />
      {pagination.map((page, index) => {
        return (
          <React.Fragment key={index}>
            <PaginationNumber
              href={createPageUrl(page)}
              page={page}
              isCurrentPage={currentPage === page}
            />
          </React.Fragment>
        );
      })}
      <PaginationArrow
        href={createPageUrl(currentPage + 1)}
        direction='right'
      />
    </div>
  );
};

export const PaginationArrow = ({
  href,
  direction,
}: {
  href: string;
  direction: 'left' | 'right';
}) => {
  return (
    <div className='w-12 h-12 bg-red-400'>
      <Link
        href={href}
        className='flex justify-center items-center w-full h-full'
      >
        {direction === 'left' ? (
          <ChevronLeftIcon className='w-5 h-5' />
        ) : (
          <ChevronRightIcon className='w-5 h-5' />
        )}
      </Link>
    </div>
  );
};

export const PaginationNumber = ({
  href,
  page,
  isCurrentPage,
}: {
  href: string;
  page: string | number;
  isCurrentPage: boolean;
}) => {
  return (
    <div
      className={cn('w-12 h-12 text-lg ', {
        'pointer-events-none': typeof page === 'string',
        'hover:bg-gray-100': typeof page === 'number',
        'bg-gray-400 pointer-events-none': isCurrentPage,
      })}
    >
      {page === '...' ? (
        page
      ) : (
        <Link
          href={href}
          className='flex justify-center items-center w-full h-full'
        >
          {page}
        </Link>
      )}
    </div>
  );
};

export default React.memo(Pagination);
