import Image from 'next/image';
import { FaExternalLinkAlt, FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';

import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import SupportSection from '../components/SupportSection';
import { sponsors } from '../data/sponsors';
import globalStyles from '../styles/globals.module.scss';
import styles from '../styles/sponsors.module.scss';

export default function Sponsors() {
  return (
    <Layout>
      <PageMeta title="Sponsors - DevStaff" />
      <HeroSection imageSrc="/hero-support.jpg" title="Our sponsors mean a lot for our efforts" />
      <div className={styles.sponsorsBackground}>
        <div className={styles.sponsorsAbstract}>
          <Image
            src="/abstract-sponsors.svg"
            width="100"
            height="100"
            className={globalStyles.fitImage}
            alt="Sponsors Image"
          />
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
                    <span>Visit the website</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className={styles.sponsorSocial}>
                  <a href={sponsor.facebookUrl} target="_blank" rel="noreferrer">
                    <FaFacebookSquare />
                  </a>
                  <a href={sponsor.linkedInUrl} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
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
    </Layout>
  );
}
