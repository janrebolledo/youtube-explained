export default function Contact() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5 bg-[url('/gradient-2.svg')] bg-no-repeat bg-cover">
      <div>
        <h1 className='font-semibold text-5xl'>Work with us</h1>
        <p className='lg:w-1/2'>
          Reach out via{' '}
          <a
            rel='noopener noreferrer'
            href='mailto:YTExplainedTeam@Gmail.com'
            className='underline'
          >
            email
          </a>{' '}
          or fill out this form with any inquiries. Please include as many
          details as possible like content direction, audience size, & budget.
          We look forward to work with you.
        </p>
      </div>
      <form
        name='Contact'
        method='POST'
        data-netlify='true'
        className='flex flex-col items-end gap-6'
      >
        <input type='hidden' name='form-name' value='Contact' />
        <input
          type='text'
          name='name'
          className='input w-full'
          placeholder='Name'
        />
        <input
          type='email'
          name='email'
          className='input w-full'
          required
          placeholder='example@email.com'
        />
        <input
          type='tel'
          name='phone number'
          className='input w-full'
          placeholder='+1 (000) 000 - 0000'
        />
        <textarea
          name='message'
          className='input w-full'
          required
          placeholder='Message'
        ></textarea>
        <button type='submit' className='input'>
          Send
        </button>
      </form>
    </section>
  );
}
