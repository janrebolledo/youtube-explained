'use client';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

export default function Services({ services }) {
  return (
    <motion.section
      initial={{ translateY: '300px' }}
      whileInView={{ translateY: '0px' }}
      className='p-6'
      id='services'
    >
      <h1 className='border-2 border-solid border-blush rounded-3xl px-8 py-3 my-20 text-4xl font-medium w-max h-max'>
        Services
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {services.fields.services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </motion.section>
  );
}
