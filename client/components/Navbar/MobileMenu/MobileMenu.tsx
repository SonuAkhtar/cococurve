import { useState } from "react"; // react
import styles from "./mobileMenu.module.scss"; // styles
import { menuCategoryList } from "@/appData"; // appData
import { MenuCategoryType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// component
import Button from "@/components/Button/Button";

// props interface
interface showBurgerType {
  showBurger: boolean;
}

const MobileMenu = ({ showBurger }: showBurgerType) => {
  const [clickedType, setClickedType] = useState("");

  const handleMenuClick = (type: string) => {
    setClickedType((prev) => (prev === type ? "" : type));
  };

  return (
    <div className={`${styles.container} ${showBurger ? styles.show : ""}`}>
      <div className={styles.wrapper}>
        <div className={styles.search}></div>
        <Button text="Log In" />

        <div className={styles.category}>
          {Object.keys(menuCategoryList).map((item: string, idx) => (
            <div
              key={idx}
              className={`${styles.category_item} ${
                clickedType === item && styles.active
              }`}
            >
              <div
                className={styles.category_name_icon}
                onClick={() => handleMenuClick(item)}
              >
                {item}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={styles.category_icon}
                />
              </div>
              <div
                className={`${styles.category_item_box} ${
                  clickedType === item && styles.active
                }`}
              >
                {menuCategoryList[item as keyof MenuCategoryType].map((val) => (
                  <div key={val.id} className={styles.category_item_box_item}>
                    {val.name} <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
