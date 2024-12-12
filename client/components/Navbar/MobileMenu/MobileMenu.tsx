import { useState } from "react"; // react
import styles from "./mobileMenu.module.scss"; // SCSS
import { menuCategoryList } from "@/appData"; // appData
import { MenuCategoryType, mobileMenuPropsType } from "@/types"; // type

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// components
import NavSearch from "@/components/NavSearch/NavSearch";
import Button from "@/components/Button/Button";

const MobileMenu = ({ showMobileMenu }: mobileMenuPropsType) => {
  const [clickedType, setClickedType] = useState("");
  const handleMenuClick = (type: string) => {
    setClickedType((prev) => (prev === type ? "" : type));
  };

  return (
    <div className={`${styles.container} ${showMobileMenu ? styles.show : ""}`}>
      <div className={styles.wrapper}>
        <NavSearch />

        <Button text="Log In" />

        <div className={styles.category}>
          {Object.keys(menuCategoryList).map((item, idx) => (
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
