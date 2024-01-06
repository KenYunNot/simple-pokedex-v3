'use client';


import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from "@/app/lib/utils";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ChevronDoubleLeftIcon, 
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import clsx from "clsx";

export default function Pagination({ totalPages } : { totalPages: number}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const pagination = generatePagination(currentPage, totalPages);
  
  function createPageURL(pageNumber: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className='flex justify-center items-center mt-8'>
      <PaginationArrow 
        href={createPageURL(1)}
        direction='left'
        double={true}
        isDisabled={currentPage<=1}
      />
      <PaginationArrow 
        href={createPageURL(currentPage-1)}
        direction='left'
        isDisabled={currentPage<=1}
      />
      
      {pagination.map((page, index) => {
        let position: 'first' | 'last' | 'single' | 'ellipsis' | undefined;
        if (index === 0) position = 'first';
        if (index === pagination.length-1) position = 'last';
        if (pagination.length === 1) position = 'single';
        if (page === '...') position = 'ellipsis';

        return (
          <PaginationNumber
            key={index}
            page={page}
            href={createPageURL(page)}
            isActive={currentPage === page}
            position={position}
          />
        );
      })}

      <PaginationArrow 
        href={createPageURL(currentPage+1)}
        direction='right'
        isDisabled={currentPage>=totalPages}
      />
      <PaginationArrow 
        href={createPageURL(totalPages)}
        direction='right'
        double={true}
        isDisabled={currentPage>=totalPages}
      />
    </div>
  )
}

function PaginationArrow({
  href,
  direction,
  double,
  isDisabled
} : {
  href: string,
  direction: 'left' | 'right',
  double?: boolean,
  isDisabled: boolean,
}) {
  const className = clsx(
    "flex justify-center items-center w-10 h-10 bg-red-400 border rounded-full hover:bg-red-300",
    {
      "hidden" : isDisabled,
      "mr-3" : direction === 'left',
      "ml-3" : direction === 'right',
    },
  )
  const iconClassName = "w-6 h-6";

  let icon: any;
  if (direction === 'left') {
    icon = double ? <ChevronDoubleLeftIcon className={iconClassName} /> : <ChevronLeftIcon className={iconClassName} />;
  } else {
    icon = double ? <ChevronDoubleRightIcon className={iconClassName} /> : <ChevronRightIcon className={iconClassName} />;
  }

  if (isDisabled)
    return (<div className={className}>{icon}</div>)

  return (<Link href={href} className={className}>{icon}</Link>);
}

function PaginationNumber({
  page,
  href,
  isActive,
  position
} : {
  page: number | string,
  href: string,
  isActive: boolean,
  position?: 'first' | 'last' | 'single' | 'ellipsis',
}) {
  const className = clsx(
    "flex justify-center items-center w-12 h-12 font-bold border border-gray-300",
    {
      'rounded-l-lg' : position === 'first' || position === 'single',
      'rounded-r-lg' : position === 'last' || position === 'single',
      'bg-gray-300' : position === 'ellipsis',
      'bg-red-400' : isActive,
    },
  )

  if (isActive || position === 'ellipsis')
    return (<div className={className}>{page}</div>);

  return (
    <Link href={href} className={`${className} hover:bg-red-200`}>
      {page}
    </Link>
  );
}