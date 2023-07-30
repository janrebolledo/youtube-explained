'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '../../../public/icons/menu.svg';

export default function Header() {
  let lastScroll = 0;
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= lastScroll) {
        header.dataset.visible = true;
      } else {
        header.dataset.visible = false;
      }
      if (currentScroll < 96) {
        header.dataset.visible = true;
      }
      lastScroll = currentScroll;
    });
  }, []);

  function handleMenu() {
    setMenuState(!menuState);

    const header = document.getElementById('header');

    menuState
      ? (header.dataset.modalOpen = false)
      : (header.dataset.modalOpen = true);
  }

  return (
    <header
      id='header'
      className='fixed w-auto md:w-full z-20 h-24 px-6 flex items-center justify-between top-0 left-0 right-0 bg-gradient-to-b from-blush-light to-blush border-none z-100 transition-all'
    >
      <div className='hidden md:flex gap-8'>
        <Link href='/' className='btn-primary bg-white text-blush border-none'>
          Home
        </Link>
        <a
          href='#services'
          className='btn-primary bg-white text-blush border-none'
        >
          Services
        </a>
      </div>
      <Link href='/' className='font-bold text-xl text-white'>
        Julian Hicks
      </Link>
      <div className='hidden md:flex gap-8'>
        <a href='#work' className='btn-primary bg-white text-blush border-none'>
          Previous Work
        </a>
        <a
          href='#contact'
          className='btn-primary bg-white text-blush border-none'
        >
          Contact &rarr;
        </a>
      </div>
      {menuState && (
        <nav className='absolute w-full text-white top-24 left-0 right-0 bottom-0 h-[calc(100dvh-6rem)] bg-blush p-6 font-bold text-2xl flex md:hidden flex-col gap-8 headerNav'>
          <Link href='/'>Home</Link>
          <a href='/#services'>Services</a>
          <a href='/#work'>Previous Work</a>
          <a href='/#contact'>Contact &rarr;</a>
        </nav>
      )}
      <Image
        src={Menu}
        width={32}
        height={32}
        className='block md:hidden'
        alt='Menu Icon'
        onClick={handleMenu}
      />
    </header>
  );
}
