import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import SocialMedia from '../components/SocialMedia';
import styles from '../styles/contact.module.scss';
import globalStyles from '../styles/globals.module.scss';

export default function Contact() {
  return (
    <Layout>
      <PageMeta title="Contact - DevStaff" />
      <HeroSection imageSrc="/hero-contact.jpg" title="Get in touch" />
      <div className={styles.contactBackground}>
        <div className={styles.contactAbstract}>
          <Image
            src="/abstract-contact.svg"
            width="100"
            height="100"
            className={globalStyles.fitImage}
            alt="Contact Image"
          />
        </div>
      </div>

      <section className="pb-5">
        <div className="container">
          <div className="row pb-10">
            <div className="col-12 d-flex align-items-center flex-column">
              <div>
                <div className={styles.contactText}>
                  <p>You have a story to share with us?</p>
                  <p>You are code addicted and need support?</p>
                  <p>You would like to be a delightful speaker?</p>
                  <p>You would like to fly?</p>
                  <br />
                  <p>Don&apos;t hesitate to reach us via:</p>
                </div>
                <div className={styles.contactDetails}>
                  <div className={styles.emailContainer}>
                    <h3 className={styles.contactTitle}>Email</h3>
                    <div className={styles.email}>
                      <FaEnvelope size={24} />
                      <a href="mailto:info@devstaff.gr">info@devstaff.gr</a>
                    </div>
                  </div>
                  <div className={styles.socialMediaContainer}>
                    <h3 className={styles.contactTitle}>Social Media</h3>
                    <SocialMedia iconSize={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
