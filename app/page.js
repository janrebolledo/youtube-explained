import Contact from './components/Contact';

import { createClient } from 'contentful';
import Clients from './components/Clients';
import Services from './components/Services';
import Faq from './components/Faq';
import Landing from './components/Landing';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY,
});

export default async function Home() {
  const landing = await client.getEntry('6L7M9KrfiFl7mmMEczDnu3');
  const clients = await client.getEntry('2G6VmNdqjBnKrH9oaJhUBh');
  const services = await client.getEntry('2szV1MwD1vsVMhi6hueo7W');
  const faq = await client.getEntry('4DQnY4tN2TOq4f3TAcI0lk');
  return (
    <main className='pt-24 leading-relaxed'>
      <Landing landing={landing} />
      <Clients clients={clients} />
      <Services services={services} />
      <Contact />
      <Faq faq={faq} />
    </main>
  );
}
