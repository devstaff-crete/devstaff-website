import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBars, FaTimes, FaSlack, FaGithub, FaMeetup } from 'react-icons/fa';

import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveLink = (pathname: string) => (router.pathname === pathname ? styles.activeLink : '');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="logo-container">
            <Link href="/">
              <Image src="/logo-green.svg" width="210" height="45" alt="Devstaff logo" />
            </Link>
          </div>
          <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : null}`}>
            <ul className={styles.menu}>
              <li>
                <Link className={isActiveLink('/')} href="/">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className={isActiveLink('/events')} href="/events">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link className={isActiveLink('/sponsors')} href="/sponsors">
                  SPONSORS
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion/blob/master/jobs/README.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  JOBS
                </a>
              </li>
              <li>
                <Link className={isActiveLink('/contact')} href="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>

            <ul className={styles.social}>
              <li className={styles.socialIcon}>
                <a href="https://www.meetup.com/devstaff" target="_blank" rel="noreferrer" title="Meetup">
                  <FaMeetup />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a
                  href="https://join.slack.com/t/devstaff/shared_invite/enQtNDYyNTI0NjUyMjczLWUyN2ZkOGJjYWQyMzU2MTE0MjViYTAxYWYxMjVlMzk2ZDk1N2I3ZGI2Y2MxMmMwN2JkNzY5MGUzMGRmN2NlNWM"
                  target="_blank"
                  rel="noreferrer"
                  title="Slack"
                >
                  <FaSlack />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
