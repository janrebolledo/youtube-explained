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
    <section id='work' className='px-6 py-12 bg-blush'>
      <h2 className='border-2 border-solid border-black bg-white rounded-3xl px-8 py-3 mb-8 text-4xl font-medium w-max h-max'>
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
          {clients.fields.clients.map((client, index) => (
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
    <div className='rounded-3xl border-solid border-2 border-black p-9 flex flex-row items-center justify-center gap-8 w-full h-56 bg-gradient-to-b from-white to-gray-200'>
      <Image
        src={'https:' + image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        alt={image.fields.file.fileName}
        className='w-1/3 aspect-square rounded-full'
      />
      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-2xl'>{name}</h2>
        <p>{socialProof}</p>
        <Link href={link} className='btn-sku border-black w-full'>
          Visit on {linkedWebsite} ↗
        </Link>
      </div>
    </div>
  );
}
