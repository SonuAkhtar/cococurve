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
import Link from "next/link";
import Image from "next/image";

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
          <Link href="/" className={styles.logo}>
            <picture>
              <source media="(max-width: 576px)" srcSet="/Images/Logo.svg" />
              <Image
                src="/Images/Logo.svg"
                alt="Cococurve logo"
                width={0}
                height={0}
                sizes="100vw"
              />
            </picture>
          </Link>
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
