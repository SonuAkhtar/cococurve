"use client";

// NEXT
import Link from "next/link";
import Image from "next/image";

import styles from "./hero.module.scss"; //SCSS
import useFetchData from "@/utils/useFetchData"; // customHook
import { ApiRespDataType } from "@/types"; // type

const Hero = () => {
  // fetch API data
  const { data, loadingData } = useFetchData("/data/appData.json");
  if (!data) return null;
  const { heroData } = data as ApiRespDataType;

  if (loadingData) return <div>Loading data...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={heroData?.href}>
          <picture>
            <source media="(max-width: 600px)" srcSet={heroData?.mobileImage} />
            <Image
              src={heroData?.desktopImage}
              alt={heroData?.altText}
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
