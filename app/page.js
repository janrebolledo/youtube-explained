import Contact from './components/Contact';

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY,
});

export default async function Home() {
  // const res = await client.getEntry('554j8fBbiwATrMGIvwZOSJ');
  // console.log(res);
  return (
    <main className='pt-24 leading-relaxed'>
      <Contact />
    </main>
  );
}
