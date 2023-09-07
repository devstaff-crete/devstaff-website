import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';

import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';
import SocialMedia from '../components/SocialMedia';
import styles from '../styles/contact.module.scss';
import globalStyles from '../styles/globals.module.scss';

export default function Contact() {
  return (
    <Layout>
      <meta http-equiv="refresh" content="0; URL=https://bit.ly/3pOHYRl" />
      
      <section className="pb-5">
        <div className="container">
          <div className="row pb-10">
            <div className="col-12 d-flex align-items-center flex-column">
              <div>
                <p><br/>If you are not redirected, click <a href="https://bit.ly/3pOHYRl">here</a> to go to the Feedback Form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
