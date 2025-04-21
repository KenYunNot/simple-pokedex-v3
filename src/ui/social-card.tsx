import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SocialIcon } from 'react-social-icons';
import { match } from 'ts-pattern';
import { MailIcon } from 'lucide-react';

const SocialCard = ({ social }: { social: string }) => {
  const backgroundColor = cn({
    'bg-[#24292E]': social === 'github',
    'bg-[#007fb1]': social === 'linkedin',
    'bg-gray-200': social === 'email',
  });

  const href = {
    github: 'https://github.com/KenYunNot',
    linkedin: 'https://www.linkedin.com/in/ken-yun/',
    email: 'yunhaen@gmail.com',
  } as { [key: string]: string };

  return (
    <div className={`group relative w-96 h-64 rounded-md ${backgroundColor}`}>
      <Image
        src='/pokeball.svg'
        className='absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 duration-200 z-50 group-hover:rotate-180'
        width={64}
        height={64}
        alt='Pokeball'
      />
      <div className='relative w-full h-full rounded-md overflow-hidden'>
        <div className='flex items-center justify-center w-full h-full'>
          {match(social)
            .with('email', () => <MailIcon />)
            .otherwise(() => (
              <SocialIcon
                url={`${social}.com`}
                className='shadow-[0_0_20px_5px] shadow-gray-500 rounded-full'
              />
            ))}
        </div>
        <div
          className={`group-hover:-translate-y-full absolute w-full h-full z-10 duration-200 font-bold ${backgroundColor}`}
        >
          {match(social)
            .with('email', () => (
              <p className='flex items-center justify-center h-full text-black pointer-events-none'>
                {href[social]}
              </p>
            ))
            .otherwise(() => (
              <Link
                href={href[social]}
                className='group-hover:underline flex items-center justify-center h-full text-white'
                target='_blank'
              >
                {href[social]}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SocialCard);
