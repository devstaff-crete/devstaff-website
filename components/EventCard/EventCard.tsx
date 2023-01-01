import Image from 'next/image';

import styles from './EventCard.module.scss';

type ISOString = `${number}-${number}-${number}T${number}:${number}`;

type Props = {
  dateTime: ISOString;
  title: string;
  url: string;
};

const getDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return [day, month, year].join('/');
};

const getTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const EventCard = ({ dateTime, title, url }: Props) => {
  const eventDate = new Date(dateTime);
  const date = getDate(eventDate);
  const time = getTime(eventDate);
  const isInFuture = eventDate > new Date();

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {isInFuture ? <div className={styles.cardRibbon}>UPCOMING</div> : null}
        <div className={styles.cardDate}>
          <Image src="/icons/calendar.png" width="24" height="24" alt="calendar icon" />
          <span>{`${date} | ${time}`}</span>
        </div>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardLocation}>
          <Image src="/icons/location.png" width="24" height="24" alt="calendar icon" />
          <span>Online, Zoom</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <a href={url} className={`btn btn-link ${!isInFuture ? styles.disabledLink : null}`}>
          Book your seat
        </a>
      </div>
    </div>
  );
};

export default EventCard;
