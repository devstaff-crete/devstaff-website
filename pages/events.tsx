import Head from 'next/head';

import HeroSection from '../components/HeroSection';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <HeroSection imageSrc="/hero-events.jpg" title="EVENTS" subTitle="What about new web trends?" />;
    </>
  );
}
