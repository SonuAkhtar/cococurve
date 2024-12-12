"use client";

import { useState } from "react"; //react
import styles from "./navbar.module.scss"; // style

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faMagnifyingGlass,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// components
import Banner from "../Banner/Banner";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const bannerText: string =
  "USE FIRST15 TO GET 15% DISCOUNT ON YOUR FIRST ORDER";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleMenuClick = (value: string) => {
    setShowMenu(!showMenu);
    setSelectedMenu((prev) => (prev === value ? "" : value));
  };

  return (
    <div className={styles.container}>
      <Banner text={bannerText} />

      <main className={styles.main}>
        <nav className={styles.category}>
          <ul>
            <li onClick={() => handleMenuClick("women")}>
              WOMEN
              <FontAwesomeIcon
                className={selectedMenu === "women" ? styles.show : ""}
                icon={faAngleDown}
              />
            </li>
            <li onClick={() => handleMenuClick("men")}>
              MEN
              <FontAwesomeIcon
                className={selectedMenu === "men" ? styles.show : ""}
                icon={faAngleDown}
              />
            </li>
            <li onClick={() => handleMenuClick("trends")}>
              TRENDS
              <FontAwesomeIcon
                className={selectedMenu === "trends" ? styles.show : ""}
                icon={faAngleDown}
              />
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
        <FontAwesomeIcon
          icon={showBurger ? faBars : faXmark}
          className={styles.menuIcon}
          onClick={() => setShowBurger(!showBurger)}
        />
        <DesktopMenu showMenu={showMenu} selectedMenu={selectedMenu} />
      </main>
      <MobileMenu showBurger={showBurger} />
    </div>
  );
};

export default Navbar;
