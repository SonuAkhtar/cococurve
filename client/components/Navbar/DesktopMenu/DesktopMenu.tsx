import { useEffect, useState } from "react"; // react
import styles from "./desktopMenu.module.scss"; // SCSS
import { womenMenuData, menMenuData } from "@/appData"; // appData
import { desktopMenuPropsType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const DesktopMenu = ({
  showDesktopMenu,
  selectedNavItem,
}: desktopMenuPropsType) => {
  const [currentMenuData, setCurrentMenuData] = useState(womenMenuData);

  useEffect(() => {
    if (selectedNavItem === "women") {
      setCurrentMenuData(womenMenuData);
    } else if (selectedNavItem === "men") {
      setCurrentMenuData(menMenuData);
    } else setCurrentMenuData(womenMenuData);
  }, [selectedNavItem]);

  return (
    <div
      className={`${styles.container} ${
        showDesktopMenu ? styles.showMenu : ""
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.one}>
          <div className={styles.top}>
            <h2>Tops</h2>
            {currentMenuData.tops.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
          <div className={styles.bottom}>
            <h2>Bottoms</h2>
            {currentMenuData.bottoms.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
        </div>
        <div className={styles.two}>
          <div className={styles.top}>
            <h2>bodySuits</h2>
            {currentMenuData.bodySuits.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
          <div className={styles.bottom}>
            <h2>Dresses</h2>
            {currentMenuData.dresses.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
        </div>
        <div
          className={styles.three}
          style={{ backgroundImage: `url(${currentMenuData.centerImage})` }}
        ></div>
        <div className={styles.four}>
          <div className={styles.top}>
            <h2>Jewelry</h2>
            {currentMenuData.jewelry.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
          <div className={styles.bottom}>
            <h2>Winters</h2>
            {currentMenuData.winters.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
        </div>
        <div className={styles.five}>
          <div className={styles.top}>
            <h2>Jackets</h2>
            {currentMenuData.jackets.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
          <div className={styles.bottom}>
            <h2>Lingerie</h2>
            {currentMenuData.lingerie.map((item) => (
              <h4 key={item.id}>
                {item.name} <FontAwesomeIcon icon={faAngleRight} />
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
