"use client";

// Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [showDesktopMenu, setShowDesktopMenu] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [selectedNavItem, setSelectedNavItem] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleMouseEnter = (value: string) => {
    setShowDesktopMenu(true);
    setSelectedNavItem((prev) => (prev === value ? "" : value));
  };

  const handleMouseLeave = (value: string) => {
    setShowDesktopMenu(false);
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
      className={`${styles.container} ${isScrolled && styles.scrolling} ${
        pathname !== "/" && styles.navOtherPages
      }`}
    >
      <nav>
        <ul className={styles.category}>
          {Object.keys(menuCategoryList).map((value, idx) => (
            <li
              key={idx}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={() => handleMouseLeave(value)}
            >
              <Link href={`/${value}`}>{value}</Link>
              <FontAwesomeIcon
                className={selectedNavItem === value ? styles.active : ""}
                icon={faAngleDown}
              />
            </li>
          ))}
        </ul>
        <Link href="/" className={styles.logo}>
          <picture>
            <source media="(max-width: 768px)" srcSet="/Images/Logo.svg" />
            <Image
              src="/Images/Logo.svg"
              alt="Cococurve logo"
              width={0}
              height={0}
              sizes="100vw"
            />
          </picture>
        </Link>

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
