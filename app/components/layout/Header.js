'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../../../public/icons/menu.svg';

export default function Header() {
  let lastScroll = 0;
  const [menuState, setMenuState] = useState(true);

  useEffect(() => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= lastScroll) {
        header.dataset.visible = true;
      } else {
        header.dataset.visible = false;
      }
      // when at the top of the page, the header keeps going away
      if (currentScroll < 96) {
        header.dataset.visible = true;
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <header
      id='header'
      className='fixed w-auto md:w-full z-20 h-24 px-6 flex items-center justify-between top-0 left-0 right-0 bg-gradient-to-b from-blush-light to-blush border-none z-100 transition-all'
    >
      <div className='hidden md:flex gap-8'>
        <Link href='/' className='btn-primary'>
          Home
        </Link>
        <Link href='#services' className='btn-primary'>
          Services
        </Link>
      </div>
      <Link href='/' className='font-bold text-xl text-white'>
        YouTube Explained
      </Link>
      <div className='hidden md:flex gap-8'>
        <Link href='#work' className='btn-primary'>
          Previous Work
        </Link>
        <Link href='#contact' className='btn-primary'>
          Contact &rarr;
        </Link>
      </div>
      <Image
        src={Menu}
        width={32}
        height={32}
        className='block md:hidden'
        alt='Menu Icon'
      />
    </header>
  );
}
