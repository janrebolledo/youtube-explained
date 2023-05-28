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
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-20'>
      <div>
        <h1 className='font-semibold text-2xl'>Frequently Asked Questions</h1>
        <p className='lg:w-1/2'>{faqDescription}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              01.
            </span>{' '}
            {question1}
          </h3>
          <p>{answer1}</p>
        </div>
        <div>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              02.
            </span>{' '}
            {question2}
          </h3>
          <p>{answer2}</p>
        </div>
        <div>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              03.
            </span>{' '}
            {question3}
          </h3>
          <p>{answer3}</p>
        </div>
        <div>
          <h3 className='flex flex-row items-center gap-4 font-semibold mb-4'>
            <span className='text-[10px] p-3 rounded-lg bg-blush text-white'>
              04.
            </span>{' '}
            {question4}
          </h3>
          <p>{answer4}</p>
        </div>
      </div>
    </section>
  );
}
