"use client";

//NEXT
import Link from "next/link";
import Image from "next/image";

import styles from "./section.module.scss"; //SCSS
import useFetchData from "@/utils/useFetchData"; // customHook
import { ApiRespDataType } from "@/types"; // type

const Section = () => {
  // fetch API data
  const { data, loadingData } = useFetchData("/data/appData.json");
  if (!data) return null;
  const { sectionData } = data as ApiRespDataType;

  if (loadingData) return <div>Loading data...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {sectionData?.map((item) => (
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
