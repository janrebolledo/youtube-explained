import Image from 'next/image';
import Link from 'next/link';

export default function Services({ services }) {
  console.log();
  return (
    <section className='p-6'>
      <h1 className='border-2 border-solid border-blush rounded-3xl px-8 py-3 text-4xl font-medium w-max h-max mb-20'>
        Services
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {services.fields.services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article className='p-8 border-2 border-solid border-black rounded-2xl flex flex-col justify-between'>
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
    </article>
  );
}
