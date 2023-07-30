'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Instagram from '../../public/icons/instagram.svg';
import Twitter from '../../public/icons/twitter.svg';
import LinkedIn from '../../public/icons/linkedin.svg';
import Discord from '../../public/icons/discord.svg';

export default function Contact({ props }) {
  const { discord, instagram, linkedIn, twitter } = props.fields;
  return (
    <section
      id='contact'
      className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5 bg-[url('/gradient-2.svg')] bg-no-repeat bg-cover"
    >
      <div className='flex flex-col justify-between'>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='font-semibold text-5xl mb-2'
          >
            Work with Julian
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className='lg:w-1/2'
          >
            Reach out via{' '}
            <a
              rel='noopener noreferrer'
              href='mailto:contact@youtubeexplained.com'
              className='underline'
            >
              email
            </a>{' '}
            or fill out this form with any inquiries. Please include as many
            details as possible like content direction, audience size, & budget.
            I look forward to working with you.
          </motion.p>
        </div>
        <div className='flex gap-8 mt-2'>
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
      <form
        name='Contact'
        method='POST'
        data-netlify='true'
        className='flex flex-col items-end gap-6'
      >
        <input type='hidden' name='form-name' value='Contact' />
        <input
          type='text'
          name='name'
          className='input w-full'
          placeholder='Name'
        />
        <input
          type='email'
          name='email'
          className='input w-full'
          required
          placeholder='example@email.com'
        />
        <input
          type='tel'
          name='phone number'
          className='input w-full'
          placeholder='+1 (000) 000 - 0000'
        />
        <textarea
          name='message'
          className='input w-full resize-none h-48'
          required
          placeholder='Message'
        ></textarea>
        <button type='submit' className='btn-sku text-white'>
          Send
        </button>
      </form>
    </section>
  );
}
