'use client';
import { motion } from 'framer-motion';

export default function Faq({ faq }) {
  const {
    faqDescription,
    question1,
    question2,
    question3,
    question4,
    answer1,
    answer2,
    answer3,
    answer4,
  } = faq.fields;
  return (
    <section
      id='faq'
      className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20'
    >
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h1 className='font-semibold text-2xl'>Frequently Asked Questions</h1>
        <p className='lg:w-1/2'>{faqDescription}</p>
      </motion.div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              01.
            </span>{' '}
            {question1}
          </h3>
          <p>{answer1}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              02.
            </span>{' '}
            {question2}
          </h3>
          <p>{answer2}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              03.
            </span>{' '}
            {question3}
          </h3>
          <p>{answer3}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              04.
            </span>{' '}
            {question4}
          </h3>
          <p>{answer4}</p>
        </motion.div>
      </div>
    </section>
  );
}
