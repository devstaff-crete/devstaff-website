import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';
import globalStyles from '../styles/globals.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div className={styles.heroBackground}>
            <div className={styles.heroImage}>
              <Image
                src="/hero-about.jpg"
                alt="About Image"
                fill
                className={globalStyles.fitImage}
                priority
              />
            </div>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroAbstract}>
              <Image
                src="/abstract-home.svg"
                alt="About Abstract"
                fill
                className={globalStyles.fitImage}
                priority
              />
            </div>
          </div>
          <div className={styles.heroContent}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className={styles.heading}>
                    <span>The developers community</span>
                    <span>in Crete</span>
                  </h1>
                  <div className={styles.heroActions}>
                    <a href="#" className="btn btn-light my-4">
                      JOIN US
                    </a>
                    <a href="#" className="btn btn-outline-light my-4">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
