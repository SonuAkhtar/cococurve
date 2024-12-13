import styles from "./newsletter.module.scss"; //SCSS

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Subscribe to our newsletter
          <br />
          for latest trend updates.
        </h2>
        <div className={styles.emailBox}>
          <FontAwesomeIcon className={styles.letterIcon} icon={faEnvelope} />
          <input type="text" placeholder="Enter you Email" />
          <button>
            <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
