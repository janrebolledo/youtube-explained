import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY,
});

export const metadata = {
  title: 'Julian Hicks',
  description:
    "I'm Julian Hicks, The YouTube Guy. I help creators & brands elevate their content and revenue with creativity, strategy & analytics.",
  openGraph: {
    title: 'Julian Hicks',
    description:
      "I'm Julian Hicks, The YouTube Guy. I help creators & brands elevate their content and revenue with creativity, strategy & analytics.",

    images:
      'https://images.ctfassets.net/wmyw54ebg2uz/FiUP64PEdFJ49UwzlDaAq/894d9ddccc45be4b7bc94e7eb97afce1/4_E-gO4Q_400x400.jpg?h=250',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default async function RootLayout({ children }) {
  const footer = await client.getEntry('554j8fBbiwATrMGIvwZOSJ');
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer props={footer} />
        <script
          data-host='https://app.microanalytics.io/'
          data-dnt='false'
          src='https://app.microanalytics.io/js/script.js'
          id='ZwSg9rf6GA'
          async
          defer
        ></script>
      </body>
    </html>
  );
}
