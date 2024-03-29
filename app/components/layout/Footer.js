import Image from 'next/image';
import Link from 'next/link';

import Instagram from '../../../public/icons/instagram.svg';
import Twitter from '../../../public/icons/twitter.svg';
import LinkedIn from '../../../public/icons/linkedin.svg';
import Discord from '../../../public/icons/discord.svg';

export default function Footer({ props }) {
  const { image, copyright, discord, instagram, linkedIn, twitter } =
    props.fields;
  return (
    <footer className='bg-[#F8E6EB] p-6 flex flex-col items-center'>
      <div className='flex flex-col lg:flex-row justify-between items-center w-full gap-8'>
        <div className='flex items-center gap-8'>
          <Image
            src={'https:' + image.fields.file.url}
            width={props.fields.image.fields.file.details.image.width}
            height={props.fields.image.fields.file.details.image.height}
            className='rounded-full w-16'
            alt='Image of Julian Hicks'
          />
          <h3 className='font-bold'>Julian Hicks</h3>
        </div>
        <div className='font-medium flex flex-col items-center lg:flex-row gap-14'>
          <Link href='/'>Home</Link>
          <a href='#work'>Previous Work</a>
          <a href='#services'>Services</a>
          <a href='#contact'>Contact</a>
          <a href='#faq'>FAQ</a>
        </div>
        <div className='flex gap-8'>
          <Link href={instagram}>
            <Image src={Instagram} width={24} height={24} alt='Instagram' />
          </Link>
          <Link href={twitter}>
            <Image src={Twitter} width={24} height={24} alt='Twitter' />
          </Link>
          <Link href={linkedIn}>
            <Image src={LinkedIn} width={24} height={24} alt='LinkedIn' />
          </Link>
          <Link href={discord}>
            <Image src={Discord} width={24} height={24} alt='Discord' />
          </Link>
        </div>
      </div>
      <small className='text-xs text-neutral-500 text-center mt-8'>
        {copyright}
      </small>
    </footer>
  );
}
