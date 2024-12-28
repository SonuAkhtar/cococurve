"use client";

import { useEffect, useState } from "react"; //React
// Next
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./page.module.scss"; // SCSS

const DeliveryLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [urlPath, setUrlPath] = useState<number>(0);

  useEffect(() => {
    if (pathname === "/delivery/address") setUrlPath(1);
    else if (pathname === "/delivery/payment") setUrlPath(2);
    else setUrlPath(0);
  }, []);

  return (
    <div className={styles.layout}>
      <div
        className={`${styles.header} ${urlPath === 1 && styles.addressPage} ${
          urlPath === 2 && styles.paymentPage
        }`}
      >
        <h3>
          <Image
            src={`/Images/delivery/${
              urlPath === 1 ? "number-1-highlight" : "check"
            }.png`}
            alt="confirm image"
            width={0}
            height={0}
            sizes="100vw"
          />
          Delivery Details
        </h3>
        <h3>
          <Image
            src={`/Images/delivery/${
              urlPath === 1 ? "number-2-gray" : "number-2-highlight"
            }.png`}
            alt="confirm image"
            width={0}
            height={0}
            sizes="100vw"
          />
          Payment Method
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DeliveryLayout;
