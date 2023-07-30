'use client';
// import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Landing({ landing }) {
  const {
    photo,
    heading,
    buttonText,
    // statistic1,
    // statisticData1,
    // statisticTitle2,
    // statisticData2,
    // statisticTitle3,
    // statisticData3,
    // dataRange,
    // thumbnails,
  } = landing.fields;

  // const countupRef = useRef(null);
  // const countupRef2 = useRef(null);
  // const countupRef3 = useRef(null);
  // let countUpAnim;

  // useEffect(() => {
  //   initCountUp(countupRef.current, statisticData1);
  //   initCountUp(countupRef2.current, statisticData2);
  //   initCountUp(countupRef3.current, statisticData3);
  // }, []);

  // async function initCountUp(ref, data) {
  //   const countUpModule = await import('countup.js');
  //   countUpAnim = new countUpModule.CountUp(ref, data);
  //   if (!countUpAnim.error) {
  //     countUpAnim.start();
  //   } else {
  //     console.error(countUpAnim.error);
  //   }
  // }
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-6 items-center gap-8 min-h-[60vh]'>
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-2xl'>Julian Hicks</h2>
          <h1 className='text-4xl'>{heading}</h1>
          <a
            href='#contact'
            className='btn-primary text-base bg-gradient-to-t from-blush to-red-500 border-white/30'
          >
            {buttonText}
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src={'https:' + photo.fields.file.url}
            alt={photo.fields.file.fileName}
            width={photo.fields.file.details.image.width}
            height={photo.fields.file.details.image.height}
            className='w-96 h-96 rounded-full'
          />
        </div>
      </div>
    </section>
  );
}
