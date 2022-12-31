import Image, { ImageProps } from 'next/image';

import globalStyles from '../../styles/globals.module.scss';
import styles from './HeroSection.module.scss';

type Props = {
  imageSrc: ImageProps['src'];
  title: string;
  subTitle?: string;
};

const HeroSection = ({ imageSrc, title, subTitle }: Props) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroImage}>
          <Image src={imageSrc} fill className={globalStyles.fitImage} priority alt="hero image" />
        </div>
        <div className={styles.heroOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {subTitle ? (
                <>
                  <h1 className={styles.heading}>{title}</h1>
                  <p className={styles.subHeading}>{subTitle}</p>
                </>
              ) : (
                <h1 className={styles.headingSingle}>{title}</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
