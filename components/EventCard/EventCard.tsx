import Image from 'next/image';

import styles from './EventCard.module.scss';

type ISOString = `${number}-${number}-${number}T${number}:${number}`;

type Props = {
  date: `${number}/${number}/${number}`;
  time: `${number}:${number}`;
  title: string;
  location: string;
  locationUrl?: string;
  eventUrl: string;
};

const EventCard = ({ date, time, title, location, locationUrl, eventUrl }: Props) => {
  const [day, month, year] = date.split('/');
  const [hours, minutes] = time.split(':');
  const eventDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes));
  const isInFuture = eventDate > new Date();

  const formattedDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {isInFuture ? <div className={styles.cardRibbon}>UPCOMING</div> : null}
        <div className={styles.cardDate}>
          <Image src="/icons/calendar.png" width="24" height="24" alt="calendar icon" />
          <span>{`${formattedDate} | ${time}`}</span>
        </div>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardLocation}>
          <Image src="/icons/location.png" width="24" height="24" alt="calendar icon" />
          {locationUrl ? (
            <a href={locationUrl} target="_blank" rel="noreferrer">
              {location}
            </a>
          ) : (
            <span>{location}</span>
          )}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a
          href={eventUrl}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-link ${!isInFuture ? styles.disabledLink : null}`}
        >
          Book your seat
        </a>
      </div>
    </div>
  );
};

export default EventCard;
