// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import styles from "./footer.module.scss";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.footer_top}>
          <ul className={styles.links}>
            <li>HOME</li>
            <li>WOMEN FASHION</li>
            <li>MEN FASHION</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
          </ul>
          <div className={styles.social}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer_bottom}>
          <div className={styles.copyright}>
            © 2024 CocoCurve. All rights reserved.
          </div>
          <div className={styles.logo}>COCOCURVE</div>
          <div className={styles.terms}>
            <span>TERMS OF SERVICE</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
