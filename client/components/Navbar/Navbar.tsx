"use client";

import { useEffect, useState } from "react"; // react
import styles from "./navbar.module.scss"; // SCSS
import { menuCategoryList } from "@/appData"; // appData

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// components
import NavSearch from "../NavSearch/NavSearch";
import Button from "../Button/Button";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import BurgerButton from "../BurgerButton/BurgerButton";

const Navbar = () => {
  const [showDesktopMenu, setShowDesktopMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [selectedNavItem, setSelectedNavItem] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleMenuClick = (value: string) => {
    setShowDesktopMenu(!showDesktopMenu);
    setSelectedNavItem((prev) => (prev === value ? "" : value));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.container} ${isScrolled ? styles.scrolling : ""}`}
    >
      <nav>
        <ul className={styles.category}>
          {Object.keys(menuCategoryList).map((value, idx) => (
            <li key={idx} onClick={() => handleMenuClick(value)}>
              {value}
              <FontAwesomeIcon
                className={selectedNavItem === value ? styles.active : ""}
                icon={faAngleDown}
              />
            </li>
          ))}
        </ul>
        <div className={styles.logo}>COCOCURVE</div>

        <div className={styles.search}>
          <NavSearch />
          <Button text="Log In" />
        </div>

        <BurgerButton
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </nav>

      <DesktopMenu
        showDesktopMenu={showDesktopMenu}
        selectedNavItem={selectedNavItem}
      />
      <MobileMenu showMobileMenu={showMobileMenu} />
    </div>
  );
};

export default Navbar;
