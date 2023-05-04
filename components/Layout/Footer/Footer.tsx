import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

import Logo from '../../../public/logo-footer.svg';
import SocialMedia from '../../SocialMedia';
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

            <div className={styles.email}>
              <FaEnvelope />
              <a href="mailto:info@devstaff.gr">info@devstaff.gr</a>
            </div>
          </div>

          <div className={`col-12 col-sm-6 col-lg-3 order-1 order-lg-2 py-3 ${styles.secondColumn}`}>
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

          <div className={`col-12 col-sm-6 col-lg-3 order-2 order-lg-3 py-3 ${styles.thirdColumn}`}>
            <h4 className={styles.heading}>MORE</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/terms">TERMS AND CONDITIONS</Link>
              </li>
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
            <div className={styles.socialMedia}>
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-6 py-2">
            <div className={styles.copyright}>
              Copyright © DevStaff {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-6 py-2">
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
