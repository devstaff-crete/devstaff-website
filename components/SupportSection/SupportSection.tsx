import Image from 'next/image';

import styles from './SupportSection.module.scss';

type Props = {
  compactView?: boolean;
};

const SupportSection = ({ compactView = false }: Props) => (
  <section>
    <div>
      <div className={styles.supportImage}>
        <Image src="/hero-support.jpg" fill alt="Support Image" />
      </div>
      <div className={styles.supportOverlay}></div>
      <div className={styles.supportAbstract}>
        <Image src="/abstract-support.svg" fill alt="Support Abstract" />
      </div>
    </div>
    <div className={`${styles.supportContent} ${compactView ? styles.compactView : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-10">
            <h2 className={styles.supportTitle}>Would you like to support our community?</h2>
            <h3 className={styles.supportSubtitle}>Become an Open Collective contributor</h3>
            <div className={styles.supportActions}>
              <a
                href="https://opencollective.com/devstaff"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-4"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SupportSection;
