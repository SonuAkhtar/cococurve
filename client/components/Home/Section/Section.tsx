import React from "react";
import Link from "next/link"; //NEXT
import styles from "./section.module.scss"; //SCSS
import { sectionData } from "@/appData"; //appData

// components
import Image from "next/image";

const Section = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {sectionData.map((item) => (
          <div key={item.id} className={styles.data_items}>
            <Link href={item.href}>
              <picture>
                <source media="(max-width: 600px)" srcSet={item.mobileImage} />
                <Image
                  src={item.desktopImage}
                  alt={item.altText}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </picture>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
