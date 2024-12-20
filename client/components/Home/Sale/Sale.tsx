"use client";

import styles from "./sale.module.scss"; // SCSS
import { saleData } from "@/appData"; // appData

// component
import Button from "@/components/Button/Button";
import SaleCard from "./SaleCard/SaleCard";
import MarqueeComp from "@/components/MarqueeComp/MarqueeComp";

const Sale = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h4 className={styles.title}>SALE</h4>
          <h1 className={styles.offer}>FLAT 20% OFF*</h1>
          <h3 className={styles.subtitle}>On all women apparels</h3>
        </div>
        <div className={styles.cards_wrapper}>
          <MarqueeComp>
            <div className={styles.cards}>
              {saleData.map((item) => (
                <SaleCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  rating={item.rating}
                  title={item.title}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  off={item.off}
                />
              ))}
            </div>
          </MarqueeComp>
        </div>
        <Button text="View All" />
      </div>
    </div>
  );
};

export default Sale;
