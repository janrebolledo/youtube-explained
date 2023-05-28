import Image from 'next/image';
import Link from 'next/link';

export default function Landing({ landing }) {
  const {
    photo,
    heading,
    buttonText,
    statistic1,
    statisticData1,
    statisticTitle2,
    statisticData2,
    statisticTitle3,
    statisticData3,
    dataRange,
    thumbnails,
  } = landing.fields;
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 p-6 items-center min-h-[60vh]'>
        <div className='flex flex-col gap-4'>
          <Image
            src={'https:' + photo.fields.file.url}
            alt={photo.fields.file.fileName}
            width={photo.fields.file.details.image.width}
            height={photo.fields.file.details.image.height}
            className='w-32 h-32 rounded-full'
          />
          <h2 className='font-semibold text-2xl'>YouTube Explained</h2>
          <h1 className='text-4xl'>{heading}</h1>
          <Link
            href='/'
            className='btn-primary bg-gradient-to-t from-blush to-red-500 border-white/30'
          >
            {buttonText}
          </Link>
        </div>
        <div className='flex flex-row items-center justify-center gap-12'>
          <div className='flex flex-col items-center gap-6'>
            <h3 className='w-44 h-44 flex justify-center items-center font-semibold text-5xl text-white radial-gradient border-2 border-solid rounded-2xl border-white'>
              {statisticData1}
            </h3>
            <p className='font-semibold'>{statistic1}</p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <h3 className='w-44 h-44 flex justify-center items-center font-semibold text-5xl text-white radial-gradient border-2 border-solid rounded-2xl border-white'>
              {statisticData2}
            </h3>
            <p className='font-semibold'>{statisticTitle2}</p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <h3 className='w-44 h-44 flex justify-center items-center font-semibold text-5xl text-white radial-gradient border-2 border-solid rounded-2xl border-white'>
              {statisticData3}
            </h3>
            <p className='font-semibold'>{statisticTitle3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
