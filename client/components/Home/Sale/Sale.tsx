import Button from "@/components/Button/Button";
import styles from "./sale.module.scss";

// appData
import { saleData } from "@/appData";

// component
import SaleCard from "./SaleCard/SaleCard";

const Sale = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>SALE</div>
          <div className={styles.offer}>FLAT 20% OFF*</div>
          <div className={styles.subtitle}>On all women apparels</div>
        </div>
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
        <Button text="View All" />
      </div>
    </div>
  );
};

export default Sale;
