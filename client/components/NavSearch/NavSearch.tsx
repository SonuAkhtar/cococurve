import styles from "./navSearch.module.scss"; // SCSS

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMinus } from "@fortawesome/free-solid-svg-icons";

const NavSearch = () => {
  return (
    <main className={styles.container}>
      <input type="text" placeholder="Search Fashion Here" />
      <FontAwesomeIcon icon={faMinus} className={styles.divider} />
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
    </main>
  );
};

export default NavSearch;
