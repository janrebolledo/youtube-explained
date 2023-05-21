import Contact from './components/Contact';

import { createClient } from 'contentful';
import Clients from './components/Clients';
import Services from './components/Services';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY,
});

export default async function Home() {
  const services = await client.getEntry('2szV1MwD1vsVMhi6hueo7W');
  const clients = await client.getEntries({ content_type: 'client' });
  return (
    <main className='pt-24 leading-relaxed'>
      <Clients clients={clients} />
      <Services services={services} />
      <Contact />
    </main>
  );
}
