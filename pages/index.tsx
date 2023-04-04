import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import EventCard from '../components/EventCard';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import SupportSection from '../components/SupportSection';
import { events } from '../data/events';
import styles from '../styles/Home.module.scss';
import globalStyles from '../styles/globals.module.scss';

export const getStaticProps = async () => {
  return {
    props: {
      recentEvents: events.slice(0, 4)
    }
  };
};

const Home = ({ recentEvents }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <PageMeta title="DevStaff - The developers community gathering" />
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
                    <a href="https://meetup.com/devstaff" className="btn btn-light my-4">
                      JOIN US
                    </a>
                    <a
                      href="https://github.com/devstaff-crete/DevStaff-Heraklion"
                      className="btn btn-outline-light my-4"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-3 pb-md-5">
          <div className="container">
            <div className="row">
              <div className="col-12 offset-md-2 col-md-8 text-center">
                <h2 className={globalStyles.sectionTitle}>ABOUT</h2>
                <p>
                  There&apos;s a lot of us, devs, here in Crete. Yet, we hardly ever get together in large
                  groups, or even know each other – somewhat strange for our small community, we hope
                  you&apos;ll agree! This group is an attempt at bringing us all together for{' '}
                  <a href="https://join.slack.com/t/devstaff/shared_invite/enQtNDYyNTI0NjUyMjczLWUyN2ZkOGJjYWQyMzU2MTE0MjViYTAxYWYxMjVlMzk2ZDk1N2I3ZGI2Y2MxMmMwN2JkNzY5MGUzMGRmN2NlNWM">
                    informal chats
                  </a>{' '}
                  about what we&apos;re all passionate about: technology and software. Join the meetup, learn,
                  teach, speak your mind, sharpen your skills, share the knowledge and help us build a
                  community where devs can openly exchange ideas!
                </p>
                <a href="https://www.meetup.com/devstaff" className="btn btn-primary mt-5">
                  JOIN US
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="events">
          <div className="container">
            <div className="row mt-5 py-5">
              <div className="col-12">
                <h2 className={globalStyles.sectionTitle}>EVENTS</h2>
              </div>
            </div>
            <div className="row">
              {recentEvents.map(({ date, time, title, location, locationUrl, eventUrl }) => (
                <div key={eventUrl} className="col-12 col-sm-6 col-lg-3 py-4">
                  <EventCard
                    date={date}
                    time={time}
                    title={title}
                    location={location}
                    locationUrl={locationUrl}
                    eventUrl={eventUrl}
                  />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 mb-5 pt-3 pb-5 text-center">
                <Link href="/events" className="btn btn-primary">
                  VIEW ALL
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SupportSection compactView={true} />
      </main>
    </Layout>
  );
};

export default Home;
