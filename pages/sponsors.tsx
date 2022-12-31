import Head from 'next/head';

import HeroSection from '../components/HeroSection';

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors</title>
      </Head>
      <HeroSection imageSrc="/hero-support.jpg" title="Our sponsors mean a lot for our efforts" />;
    </>
  );
}
