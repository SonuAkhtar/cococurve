"use client";

// import Packages
import Marquee from "react-fast-marquee";

import styles from "./marqueeComp.module.scss"; // SCSS

interface MarqueeProps {
  children: React.ReactNode;
}

const MarqueeComp = ({ children }: MarqueeProps) => {
  return (
    <Marquee
      autoFill={true}
      pauseOnHover={true}
      speed={100}
      className={styles.container}
      gradient={true}
      gradientWidth={30}
      gradientColor="#b6b8bc"
    >
      {children}
    </Marquee>
  );
};

export default MarqueeComp;
