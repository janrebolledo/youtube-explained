'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className='p-8 border-2 border-solid border-black rounded-2xl flex flex-col justify-between'
    >
      <div className='flex flex-col gap-6 mb-6'>
        <Image
          src={'https:' + service.fields.icon.fields.file.url}
          alt={service.fields.icon.fields.file.fileName}
          width={service.fields.icon.fields.file.details.image.width}
          height={service.fields.icon.fields.file.details.image.height}
        />
        <h2 className='text-3xl font-semibold'>{service.fields.title}</h2>
        <p>{service.fields.description}</p>
      </div>
      <Link
        href={service.fields.link || '/'}
        className='btn-primary border-blush bg-blush'
      >
        Learn more &rarr;
      </Link>
    </motion.article>
  );
}
