'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import './carousel.css';

export default function Clients({ clients }) {
  return (
    <section className="bg-[url('/gradient.png')] bg-no-repeat bg-cover px-6 py-12">
      <h2 className='font-semibold text-2xl mb-8 text-white'>
        Notable Clients
      </h2>
      <div>
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          modules={[Autoplay]}
          className='mySwiper w-full'
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {clients.items.map((client, index) => (
            <SwiperSlide key={index}>
              <Client client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Client({ client }) {
  const { name, image, socialProof, linkedWebsite, link } = client.fields;
  return (
    <div className='rounded-3xl border-solid border-2 border-white p-9 text-white flex flex-row items-center justify-center gap-8 w-full h-56 bg-gradient-to-tr from-blush to-red-500'>
      <Image
        src={'https:' + image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        alt={image.fields.file.fileName}
        className='w-32 h-32 rounded-full'
      />
      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-2xl'>{name}</h2>
        <p>{socialProof}</p>
        <Link href={link} className='btn-primary w-full'>
          Visit on {linkedWebsite} ↗
        </Link>
      </div>
    </div>
  );
}
