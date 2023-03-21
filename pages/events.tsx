import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import EventCard from '../components/EventCard';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import { events } from '../data/events';

export const getStaticProps = async () => {
  return {
    props: {
      events
    }
  };
};

export default function Events({ events }: InferGetStaticPropsType<typeof getStaticProps>) {
  const INITIAL_LIMIT = 12;
  const [showAll, setShowAll] = useState(false);

  const presentedEvents = showAll ? events : events.slice(0, INITIAL_LIMIT);

  return (
    <Layout>
      <PageMeta title="Events - DevStaff" />
      <HeroSection imageSrc="/hero-events.jpg" title="EVENTS" subTitle="What about new web trends?" />
      <section id="events">
        <div className="container">
          <div className="row">
            {presentedEvents.map(({ date, time, title, location, locationUrl, eventUrl }) => (
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
          {!showAll ? (
            <div className="row">
              <div className="col-12 mb-5 pt-3 pb-5 text-center">
                <button onClick={() => setShowAll(true)} className="btn btn-primary">
                  VIEW MORE
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
