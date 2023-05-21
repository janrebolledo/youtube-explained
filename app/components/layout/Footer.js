import Image from 'next/image';
import Link from 'next/link';

import Instagram from '../../../public/icons/instagram.svg';
import Twitter from '../../../public/icons/twitter.svg';
import LinkedIn from '../../../public/icons/linkedin.svg';
import Discord from '../../../public/icons/discord.svg';

export default function Footer({ props }) {
  const { image, copyright, discord, instagram, linkedIn, twitter } =
    props.fields;
  console.log(props.fields.image.fields.file);
  return (
    <footer className='bg-[#F8E6EB] flex justify-between p-6'>
      <div>
        <Image
          src={'https:' + image.fields.file.url}
          width={props.fields.image.fields.file.details.image.width}
          height={props.fields.image.fields.file.details.image.height}
          className='rounded-full w-16'
          alt='Image of Julian Hicks'
        />
        <h3>Julian Hicks</h3>
      </div>
      <div className='font-medium flex gap-14'>
        <Link href='/'>Home</Link>
        <Link href='#work'>Previous Work</Link>
        <Link href='#services'>Services</Link>
        <Link href='#contact'>Contact</Link>
        <Link href='#faq'>FAQ</Link>
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
      <small className='text-xs text-neutral-500'>{copyright}</small>
    </footer>
  );
}
