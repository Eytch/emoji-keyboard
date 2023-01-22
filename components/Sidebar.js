import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    router.push(`/search/${inputValue}`);
  };

  return (
    <div>
      <h3 className='text-grey font-bold mb-4'>Categories</h3>
      <ul className=' grid grid-cols-2 gap-2 md:grid-cols-1 md:max-w-[270px] text-xs font-regular lg:text-base'>
        <Link
          href='/'
          className='md:col-span-1 text-center col-span-2 md:text-left'
        >
          <li
            className={`${
              router.pathname == '/' ? 'bg-main font-semibold' : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            😄 Smileys and Emotions
          </li>
        </Link>
        <Link href='/people'>
          <li
            className={`${
              router.pathname == '/people'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            👋 People & Body Parts
          </li>
        </Link>
        <Link href='/animals'>
          <li
            className={`${
              router.pathname == '/animals'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            🐶 Animals & Nature
          </li>
        </Link>
        <Link href='/food'>
          <li
            className={`${
              router.pathname == '/food'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            🍔 Food & Drink
          </li>
        </Link>
        <Link href='/activity'>
          <li
            className={`${
              router.pathname == '/activity'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            ⚽️ Activity
          </li>
        </Link>
        <Link href='/travel'>
          <li
            className={`${
              router.pathname == '/travel'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            🚀 Travel & Places
          </li>
        </Link>
        <Link href='/objects'>
          <li
            className={`${
              router.pathname == '/objects'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            🧸 Objects
          </li>
        </Link>
        <Link href='/symbols'>
          <li
            className={`${
              router.pathname == '/symbols'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            💯 Symbols
          </li>
        </Link>
        <Link href='/flags'>
          <li
            className={`${
              router.pathname == '/flags'
                ? 'bg-main font-semibold'
                : 'bg-secondary'
            } cursor-pointer py-2 px-5 border border-secondary hover:border-main rounded-md text-white transition-all ease-in-out`}
          >
            🇪🇬 Flags
          </li>
        </Link>

        <li className=' col-span-2 md:col-span-1'>
          <form onSubmit={submitForm}>
            <input
              type='text'
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              className=' border border-secondary rounded-md w-full h-10 bg-secondary p-4 text-sm text-center md:text-left focus:outline-none focus:shadow-sm focus:border-main'
              placeholder='Quick Search ⌘K'
              value={inputValue}
            />
          </form>
        </li>
      </ul>
    </div>
  );
}
