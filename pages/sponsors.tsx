import Head from 'next/head';
import Image from 'next/image';

import HeroSection from '../components/HeroSection';
import SupportSection from '../components/SupportSection';
import { sponsors } from '../data/sponsors';
import abstractSponsorsImg from '../public/abstract-sponsors.svg';
import exitIcon from '../public/icons/exit.svg';
import facebookIcon from '../public/icons/facebook.svg';
import linkedInIcon from '../public/icons/linkedin.svg';
import globalStyles from '../styles/globals.module.scss';
import styles from '../styles/sponsors.module.scss';

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors</title>
      </Head>
      <HeroSection imageSrc="/hero-support.jpg" title="Our sponsors mean a lot for our efforts" />
      <div className={styles.sponsorsBackground}>
        <div className={styles.sponsorsAbstract}>
          <Image src={abstractSponsorsImg} className={globalStyles.fitImage} alt="Sponsors Image" />
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h3 className={globalStyles.sectionTitle}>OUR BELOVED SPONSORS</h3>
            </div>
          </div>
          {sponsors.map(sponsor => (
            <div key={sponsor.website} className={`row ${styles.sponsorRow}`}>
              <div className={`col-12 col-md-5 col-lg-4 ${styles.sponsorImage}`}>
                <Image src={sponsor.image} alt={sponsor.title} />
              </div>
              <div className="col-12 col-md-7 col-lg-8">
                <h3 className={styles.sponsorTitle}>{sponsor.title}</h3>
                <div className={styles.sponsorLink}>
                  <a href={sponsor.website} target="_blank" rel="noreferrer">
                    <span>Visit the website</span>{' '}
                    <Image src={exitIcon} width={16} height={16} alt="exit icon" />
                  </a>
                </div>
                <div className={styles.sponsorSocial}>
                  <a href={sponsor.facebookUrl} target="_blank" rel="noreferrer">
                    <Image src={facebookIcon} width={16} height={16} alt="facebook icon" />
                  </a>
                  <a href={sponsor.linkedInUrl} target="_blank" rel="noreferrer">
                    <Image src={linkedInIcon} width={16} height={16} alt="linkedin icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-12 mt-5 py-3 text-center">
              <a
                href="https://opencollective.com/devstaff"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                BECOME A SPONSOR
              </a>
            </div>
          </div>
        </div>
      </section>

      <SupportSection compactView />
    </>
  );
}
