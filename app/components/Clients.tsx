'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Clients({ clients }) {
  console.log(clients.items);
  return (
    <section className="bg-[url('/gradient.png')] bg-no-repeat bg-cover px-6">
      <h2 className='font-semibold text-2xl'>Notable Clients</h2>
      <div>
        {clients.items.map((client, index) => (
          <Client client={client} key={index} />
        ))}
      </div>
    </section>
  );
}

function Client({ client }) {
  const { name, image, socialProof, linkedWebsite, link } = client.fields;
  return (
    <div className='rounded-3xl border-solid border-2 border-white p-9'>
      <Image
        src={'https:' + image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
        alt={image.fields.file.fileName}
        className='w-32 h-32 rounded-full'
      />
      <div>
        <h2>{name}</h2>
        <p>{socialProof}</p>
        <Link href={link}>Visit on {linkedWebsite} ↗</Link>
      </div>
    </div>
  );
}
