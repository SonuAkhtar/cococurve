// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

// style
import styles from "./navbar.module.scss";

// components
import Banner from "../Banner/Banner";

const bannerText: string =
  "USE FIRST15 TO GET 15% DISCOUNT ON YOUR FIRST ORDER";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Banner text={bannerText} />

      <main className={styles.main}>
        <nav className={styles.category}>
          <ul>
            <li>
              WOMEN <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li>
              MEN <FontAwesomeIcon icon={faAngleDown} />
            </li>
            <li>
              TRENDS <FontAwesomeIcon icon={faAngleDown} />
            </li>
          </ul>
        </nav>
        <div className={styles.logo}>COCOCURVE</div>
        <div className={styles.search}>
          <div className={styles.search_area}>
            <input type="text" placeholder="Search Fashion Here" />

            <FontAwesomeIcon icon={faMinus} className={styles.divider} />

            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          </div>
          <div className={styles.login_btn}>
            <button>Login In</button>
          </div>
        </div>
        <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />
      </main>
    </div>
  );
};

export default Navbar;
