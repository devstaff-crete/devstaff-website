import Image from 'next/image';

import styles from './EventCard.module.scss';

type Props = {
  date: string;
  time: string;
  title: string;
  url: string;
};

const EventCard = ({ date, time, title, url }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardRibbon}>UPCOMING</div>
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
        <a href={url} className={`btn btn-link ${styles.disabledLink}`}>
          Book your seat
        </a>
      </div>
    </div>
  );
};

export default EventCard;
