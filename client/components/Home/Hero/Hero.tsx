// NEXT
import Link from "next/link";
import Image from "next/image";

import styles from "./hero.module.scss"; //SCSS

import { heroData } from "@/appData";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={heroData.href}>
          <picture>
            <source media="(max-width: 576px)" srcSet={heroData.mobileImage} />
            <Image
              src={heroData.desktopImage}
              alt={heroData.altText}
              width={0}
              height={0}
              sizes="100vw"
            />
          </picture>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
