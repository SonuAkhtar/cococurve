import Link from "next/link";
import Image from "next/image";

import styles from "./category.module.scss"; //SCSS
import { categoryData } from "@/appData"; // appData

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {categoryData.map((item) => (
          <Link href={item.href}>
            <Image
              src={item.image}
              alt={item.altText}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
