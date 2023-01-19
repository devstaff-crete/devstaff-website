import Link from 'next/link';

import FacebookLogo from '../../../public/facebook-logo.svg';
import GithubLogo from '../../../public/github-logo.svg';
import LinkedinLogo from '../../../public/linkedin-logo.svg';
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
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://www.facebook.com/Devstaff" target="_blank" rel="noreferrer">
                  <FacebookLogo />
                </a>
              </li>
              <li className={styles.socialIcon}>
                <a href="https://www.linkedin.com/company/devstaff/" target="_blank" rel="noreferrer">
                  <LinkedinLogo />
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

      <a href="#" id="pageScrollup" className={styles.scrollup}>
        <svg width="16" height="16" viewBox="0 0 490 490">
          <polygon points="0,332.668 245.004,82.631 490,332.668 413.507,407.369 245.004,235.402 76.493,407.369" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
