import Image from 'next/image';
import React from 'react';
import Creator from './Creator';
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center space-y-14 my-24'>
      <Creator />
      <div className='flex flex-col-reverse gap-5 xl:flex-row w-full rounded-3xl bg-gradient-to-r from-main to-gradientMain overflow-hidden px-10 py-5'>
        <div className='flex flex-col mx-auto space-y-8'>
          <h3 className=' text-4xl w-full text-center font-bold'>
            Hello, I am Ahmad Hesham👋
          </h3>
          <p className='  text-center md:text-lg '>
            Hey, I&apos;m Ahmad Hesham! I&apos;m a front-end developer from
            Egypt 🇪🇬, with a passion for ReactJS. <br /> I&apos;m an
            enthusiastic and hardworking junior developer, driven by a desire to
            learn and explore ideas.
            <br />
            <br />
            <i>Have a question or want to work together?</i>
          </p>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <a
              className='border py-2 px-2 rounded-md flex justify-center items-center hover:border-white hover:bg-white hover:text-main transition-all ease-in-out'
              href='http://github.com/Eytch'
            >
              Follow me on Github <BsArrowRight className='ml-2' />
            </a>

            <div className='flex gap-16 md:gap-5'>
              <a href='http://instagram.com/ahmadhesham97'>
                <BsInstagram className=' text-2xl' />
              </a>

              <a href='http://twitter.com/ahmadhesham97'>
                <BsTwitter className=' text-2xl' />
              </a>

              <a href='https://www.linkedin.com/in/ahmadhesham97/'>
                <BsLinkedin className='text-2xl' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
