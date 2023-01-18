import Image from 'next/image';
import Link from 'next/link';

import facebookLogo from '../../../public/facebook-logo.svg';
import githubLogo from '../../../public/github-logo.svg';
import linkedinLogo from '../../../public/linkedin-logo.svg';
import logo from '../../../public/logo-footer.svg';

const Footer = () => {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row mb-sm-4">
          <div className="col-12 col-sm-6 col-lg-3 order-4 order-sm-3 order-lg-1 pb-3 pl-2 footer-logo">
            <Image src={logo} alt="devstaff logo" />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-2 py-3">
            <h4>NAVIGATION</h4>
            <ul>
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
            <h4>MORE</h4>
            <ul>
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
            <h4 className="follow_us">FOLLOW US</h4>
            <ul className="footer-socials">
              <li className="footer-socials__icon">
                <a
                  href="https://github.com/devstaff-crete/DevStaff-Heraklion"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={githubLogo} alt="github logo" />
                </a>
              </li>
              <li className="footer-socials__icon">
                <a href="https://www.facebook.com/Devstaff" target="_blank" rel="noreferrer">
                  <Image src={facebookLogo} alt="facebook logo" />
                </a>
              </li>
              <li className="footer-socials__icon">
                <a href="https://www.linkedin.com/company/devstaff/" target="_blank" rel="noreferrer">
                  <Image src={linkedinLogo} alt="linkedin logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 py-2 copyright">
            <span>Copyright © DevStaff 2021. All rights reserved.</span>
          </div>

          <div className="col-12 col-sm-6 py-2 designed">
            <span>
              Designed with &#10084; by{' '}
              <a href="https://www.micmei.gr/" target="_blank" rel="noreferrer">
                Michael Meimaroglou Creative Studio
              </a>
            </span>
          </div>
        </div>
      </div>

      <a href="#" id="pageScrollup" className="scrollup">
        <svg width="16" height="16" viewBox="0 0 490 490">
          <polygon points="0,332.668 245.004,82.631 490,332.668 413.507,407.369 245.004,235.402 76.493,407.369" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
