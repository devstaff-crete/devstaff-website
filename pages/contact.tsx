import Head from 'next/head';

import HeroSection from '../components/HeroSection';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <HeroSection imageSrc="/hero-contact.jpg" title="Get in touch" />;
    </>
  );
}
