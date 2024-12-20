"use client";

// import Packages
import Marquee from "react-fast-marquee";

import styles from "./marqueeComp.module.scss"; // SCSS

const MarqueeComp = ({ children }: any) => {
  return (
    <Marquee
      autoFill={true}
      pauseOnHover={true}
      speed={100}
      className={styles.container}
      gradient={true}
      gradientWidth={100}
      gradientColor="#b6b8bc"
    >
      {children}
    </Marquee>
  );
};

export default MarqueeComp;
