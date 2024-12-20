// NEXT
import Link from "next/link";
import Image from "next/image";

import styles from "./newCollection.module.scss"; //SCSS
import { newCollectionData } from "@/appData"; // appData

const NewCollection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {newCollectionData.map((item) => (
          <div className={styles.data_items} key={item.id}>
            <Link href={item.href}>
              <picture>
                <source media="(max-width: 576px)" srcSet={item.mobileImage} />
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

export default NewCollection;
