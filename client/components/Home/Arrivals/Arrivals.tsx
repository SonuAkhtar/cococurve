import Link from "next/link";
import Image from "next/image";

import styles from "./arrivals.module.scss"; // SCSS
import { arrivalsData } from "@/appData"; // appData

// component

const Arrivals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={arrivalsData.href}>
          <picture>
            <source
              media="(max-width: 576px)"
              srcSet={arrivalsData.mobileImage}
            />
            <Image
              src={arrivalsData.desktopImage}
              alt={arrivalsData.altText}
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

export default Arrivals;
