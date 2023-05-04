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

import styles from './SocialMedia.module.scss';

const SocialMedia = ({ iconSize = 36 }) => (
  <ul className={styles.social}>
    <li className={styles.socialIcon}>
      <a href="https://www.facebook.com/Devstaff" target="_blank" rel="noreferrer" title="Facebook">
        <FaFacebookSquare size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a href="https://www.linkedin.com/company/devstaff/" target="_blank" rel="noreferrer" title="LinkedIn">
        <FaLinkedinIn size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a href="https://twitter.com/devstaff_gr" target="_blank" rel="noreferrer" title="Twitter">
        <FaTwitter size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a href="https://www.youtube.com/@DevStaff" target="_blank" rel="noreferrer" title="Youtube">
        <FaYoutube size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a href="https://opencollective.com/devstaff" target="_blank" rel="noreferrer" title="Open Collective">
        <SiOpencollective size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a
        href="https://join.slack.com/t/devstaff/shared_invite/enQtNDYyNTI0NjUyMjczLWUyN2ZkOGJjYWQyMzU2MTE0MjViYTAxYWYxMjVlMzk2ZDk1N2I3ZGI2Y2MxMmMwN2JkNzY5MGUzMGRmN2NlNWM"
        target="_blank"
        rel="noreferrer"
        title="Slack"
      >
        <FaSlack size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a href="https://www.meetup.com/devstaff" target="_blank" rel="noreferrer" title="Meetup">
        <FaMeetup size={iconSize} />
      </a>
    </li>
    <li className={styles.socialIcon}>
      <a
        href="https://github.com/devstaff-crete/DevStaff-Heraklion"
        target="_blank"
        rel="noreferrer"
        title="Github"
      >
        <FaGithub size={iconSize} />
      </a>
    </li>
  </ul>
);

export default SocialMedia;
