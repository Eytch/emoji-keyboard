import Image from 'next/image';
import Logo from './Logo';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex flex-col items-center justify-center bg-midnight min-h-[50vh] pt-7 text-center'>
      <Link href='/'>
        <div className=' relative'>
          <Logo />
          <h1 className=' text-6xl rotate-12 absolute bottom-0 -right-5 left-full lg:text-8xl'>
            😂
          </h1>
          <h1 className=' text-7xl -rotate-12 absolute -left-20 -top-10 lg:text-8xl'>
            💀
          </h1>
          <h1 className=' text-5xl absolute bottom-0 -left-10  md:text-7xl'>
            🍑
          </h1>
          <h1 className=' text-6xl absolute -top-11 -right-10 md:text-8xl'>
            🚀
          </h1>
        </div>
      </Link>
      <div className='italic text-lg lg:text-3xl pt-10'>
        <Typewriter
          options={{
            strings: [
              'More than 3,000 Emojis!',
              'Click to Copy',
              'Always up to date!',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 0.1,
            delay: 50,
          }}
        />
      </div>
    </div>
  );
}
