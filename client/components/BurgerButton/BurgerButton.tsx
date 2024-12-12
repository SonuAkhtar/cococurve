import styles from "./burgerButton.module.scss"; // SCSS
import { burgerButtonPropsType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const BurgerButton = ({
  showMobileMenu,
  setShowMobileMenu,
}: burgerButtonPropsType) => {
  return (
    <div className={styles.container}>
      {showMobileMenu ? (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      )}
    </div>
  );
};

export default BurgerButton;
