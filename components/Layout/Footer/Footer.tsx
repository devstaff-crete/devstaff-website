import Link from 'next/link';
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaMeetup,
  FaSlack,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import { SiOpencollective } from 'react-icons/si';

import Logo from '../../../public/logo-footer.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`py-3 ${styles.footer}`}>
      <div className="container">
        <div className="row mb-sm-4">
          <div className="col-12 col-sm-6 col-lg-3 order-4 order-sm-3 order-lg-1 pb-3 pl-2 py-3">
            <div className={styles.logo}>
              <Logo />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-2 py-3">
            <h4 className={styles.heading}>NAVIGATION</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/">ABOUT</Link>
              </li>
              <li>
                <Link href="/events">EVENTS</Link>
              </li>
              <li>
                <Link href="/sponsors">SPONSORS</Link>
              </li>
              <li>
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion/tree/master/jobs"
                  target="_blank"
                  rel="noreferrer"
                >
                  JOBS
                </a>
              </li>

              <li>
                <a href="mailto:info@devstaff.gr">CONTACT</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 order-2 order-lg-3 py-3">
            <h4 className={styles.heading}>MORE</h4>
            <ul className={styles.list}>
              <li>
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion/blob/master/CodeOfConduct.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  CODE OF CONDUCT
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion/blob/master/Sponsors.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  SPONSORSHIPS
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 order-3 order-sm-4 order-lg-4 py-3">
            <h4 className={`${styles.followUs} ${styles.heading}`}>FOLLOW US</h4>
            <ul className={styles.social}>
              <li className={styles.socialIcon}>
                <a href="https://www.facebook.com/Devstaff" target="_blank" rel="noreferrer" title="Facebook">
                  <FaFacebookSquare />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a
                  href="https://www.linkedin.com/company/devstaff/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://twitter.com/devstaff_gr" target="_blank" rel="noreferrer" title="Twitter">
                  <FaTwitter />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://www.youtube.com/@DevStaff" target="_blank" rel="noreferrer" title="Youtube">
                  <FaYoutube size="32px" color="#b3b3b3" />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a
                  href="https://opencollective.com/devstaff"
                  target="_blank"
                  rel="noreferrer"
                  title="Open Collective"
                >
                  <SiOpencollective />
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
                <a href="https://www.meetup.com/devstaff" target="_blank" rel="noreferrer" title="Meetup">
                  <FaMeetup />
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
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-9 py-2">
            <div className={styles.copyright}>
              Copyright © DevStaff {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3 py-2">
            <div className={styles.designed}>
              <span>
                Designed with &#10084; by{' '}
                <a href="https://www.micmei.gr/" target="_blank" rel="noreferrer">
                  Michael Meimaroglou Creative Studio
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
