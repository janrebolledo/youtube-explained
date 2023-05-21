import Link from 'next/link';

export default function Header() {
  return (
    <header className='fixed w-full h-24 px-6 flex items-center justify-between top-0 left-0 right-0 bg-gradient-to-b from-blush-light to-blush'>
      <div className='flex gap-8'>
        <Link href='/' className='btn-primary'>
          Home
        </Link>
        <Link href='/' className='btn-primary'>
          Services
        </Link>
      </div>
      <Link href='/' className='font-bold text-xl text-white'>
        YouTube Explained
      </Link>
      <div className='flex gap-8'>
        <Link href='/' className='btn-primary'>
          Previous Work
        </Link>
        <Link href='/' className='btn-primary'>
          Contact &rarr;
        </Link>
      </div>
    </header>
  );
}
